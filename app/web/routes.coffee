async = require 'async'
crypto = require 'crypto'
qs = require 'querystring'
_ = require "underscore"

# helpers_lib, config.CLIENT_ID, config.CLIENT_SECRET,
module.exports = (
  students_lib,
  helpers_lib,
  client_id,
  client_secret,
  redirect_base_uri,
  session_secret,
  auth_url,
  api_url
  ) ->
  homepage: (req, res, next) ->
    locals =
      bootstrap:
        parent:
          name:
            first: "Pam"
            last:"Martinez"

    res.render "parent-homepage", locals

  add_student: (req, res, next) ->
    console.log "in add_student"

    ###
    #  this is where logout logic lives
    ####
    # console.log "is there a student logged in? ", req.session.student_logged_in
    # if req.session.student_logged_in is true
      # this is a really hacky way, could not get auth_url/logout to properly
      # redirect back to app -- currently this forces user to manually go back to app

      # console.log "trying to log someone out"
      # req.session.student_logged_in = false
      # return res.redirect "#{auth_url}/logout"
      # auth_options =
      #   uri: "#{auth_url}/logout"
      #   method: 'POST'
      #   json:
      #     redirect_uri: "#{redirect_base_uri}/authorize_student"
      #     access_token: req.session.access_token
      # helpers_lib.quest_retry auth_options, (err, resp, body) ->
      #   console.log "in help lib after post to logout"
      #   console.log "there is an error", err
      #   console.log "body is", body
      #   console.log "response body is", resp.statusCode
      #   req.session.student_logged_in = false
      #   console.log "done here!"
      #   return

    console.log req.query.user
    redirect_uri = "#{redirect_base_uri}/authorize_student"
    state = crypto.createCipher('aes-256-ctr', session_secret).update(req.sessionID + "|" + req.query.user, 'utf8', 'hex')
    params =
      response_type: 'code'
      redirect_uri: redirect_uri
      client_id: client_id
      district_id: "56ae8e9c5994560100000ae4"
      channel: 'reading_challenge_app'
      skip: 1
      state: state
    res.redirect "#{auth_url}/authorize?#{qs.stringify params}"

  privacy: (req, res, next) ->
    res.render "privacy", {url: "https://reading-challenge.herokuapp.com"}

  authorize_student: (req, res, next) ->
    console.log "in authorize_student"

    state = crypto.createDecipher('aes-256-ctr', session_secret).update(req.query.state, 'hex', 'utf8').split('|')
    return res.redirect "/addstudent" if state[0] isnt req.sessionID
    parent_id = state[1]

    console.log "in authorize_student next"

    async.auto
      token: (cb_a) ->
        auth_options =
          uri: "#{auth_url}/tokens"
          method: 'POST'
          auth:"#{client_id}:#{client_secret}"
          json:
            code: req.query?.code
            redirect_uri: "#{redirect_base_uri}/authorize_student"
            grant_type: 'authorization_code'
        helpers_lib.quest_retry auth_options, (err, resp, body) ->
          return cb_a err if err
          unless body.access_token?
            return cb_a new Error "No access token returned from Auth Service (status #{resp.statusCode})"
          cb_a null, body.access_token

      user_info: ['token'].concat (cb_a, {token}) ->
        console.log "user_info"
        helpers_lib.get_clever_resource(api_url) "/me", token, cb_a

      user: ['user_info', 'token'].concat (cb_a, {user_info, token}) ->
        console.log "user"
        helpers_lib.get_clever_resource(api_url) "/v1.1/#{user_info.type}s/#{user_info.id}", token, (err, user_data) ->
          return cb_a err if err
          cb_a null, user_data

      # this is broken!!!! for some reason hitting this endpoint returns a 404, do I have the wrong scopes?
      # should I hit a different endpoint?
      school_info: ['user_info', 'token'].concat (cb_a, {user_info, token}) ->
        console.log "school_info"
        helpers_lib.get_clever_resource(api_url) "/v1.1/#{user_info.type}s/#{user_info.id}/school", token, (err, user_data) ->
          console.log "user data is", user_data
          # return cb_a err if err
          # cb_a null, user_data
          cb_a null, {name: "Reading Challenge Elementary"}

    , (err, results) ->
      console.log "got here at the end"
      console.log "results are, ", results

      return next err if err?
      user_type = results.user_info.type

      # error if user is not student
      if user_type isnt "student"
        console.log "houston we have a problem!"
        return res.redirect "/" #eventually show error

      student =
        id: results.user.id
        first_name: results.user.name.first
        district_id: results.user.district
        grade: results.user.grade
        school_id: results.user.school
        school_name: results.school_info.name

      req.session.student_logged_in = true
      req.session.access_token = results.token

      err = students_lib.save_student student.id, student.first_name, student.school_id, student.school_name, student.district_id, student.grade, parent_id
      # do something if error

      res.redirect "/"
