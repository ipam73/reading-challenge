async = require 'async'
crypto = require 'crypto'
qs = require 'querystring'
_ = require "underscore"

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
    # console.log "is there a student logged in? ", req.session.student_logged_in

    if req.session.student_logged_in is true
      # this is a really hacky way, could not get auth_url/logout to properly
      # redirect back to app -- currently this forces user to manually go back to app

      # console.log "trying to log someone out"
      req.session.student_logged_in = false
      return res.redirect "#{auth_url}/logout"
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

    # else
    params =
      response_type: 'code'
      redirect_uri: "#{redirect_base_uri}/authorize_student"
      client_id: client_id
      district_id: "56ae8e9c5994560100000ae4"
      channel: 'reading_challenge_app'
      skip: 1
      state: crypto.createHmac('sha256', session_secret).update(req.sessionID).digest('hex')

    res.redirect "#{auth_url}/authorize?#{qs.stringify params}"

  authorize_student: (req, res, next) ->
    console.log "in authorize_student"
    expected_state = crypto.createHmac('sha256', session_secret).update(req.sessionID).digest('hex')
    return res.redirect "/addstudent" if expected_state isnt req.query.state

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
        helpers_lib.get_clever_resource(api_url) "/me", token, cb_a
      user: ['user_info', 'token'].concat (cb_a, {user_info, token}) ->
        helpers_lib.get_clever_resource(api_url) "/v1.1/#{user_info.type}s/#{user_info.id}", token, (err, user_data) ->
          return cb_a err if err
          cb_a null, user_data
      school_info: ['user', 'token'].concat (cb_a, {user, token}) ->
        helpers_lib.get_clever_resource(api_url) "/v1.1/schools/#{user.school}", token, (err, user_data) ->
          return cb_e err if err
          cb_a null, user_data
    , (err, results) ->
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

      err = students_lib.save_student student.id, student.first_name, student.school_id, student.school_name, student.district_id, student.grade
      # do something if error

      res.redirect "/"
