async = require 'async'
crypto = require 'crypto'
qs = require 'querystring'
_ = require "underscore"

module.exports = (
  students_lib,
  helpers_lib,
  client_id,
  client_secret,
  redirect_uri,
  session_secret,
  auth_url,
  api_url
  ) ->

  homepage: (req, res, next) ->
    student_list = students_lib.get_all_students()
    locals =
      bootstrap:
        parent:
          name:
            first: "Pam"
            last:"Martinez"
        student_list: student_list

    res.render "parent-homepage", locals

  add_student: (req, res, next) ->
    console.log "in add_student"
    # if req.session.student_logged_in is true
    #   console.log "student info should not be there"
    #   console.log req.session.access_token
    #   auth_options =
    #     uri: "#{auth_url}/logout"
    #     method: 'POST'
    #     json:
    #       redirect_uri: "http://localhost:5001/add_student"
    #       access_token: req.session.access_token
    #   helpers_lib.quest_retry auth_options, (err, resp, body) ->
    #     console.log "in help lib after post to logout"
    #     console.log "there is an error", err if err?
    #     console.log "response body is", resp

    #     req.session.student_logged_in = false
    #     console.log "done here!"
    #     return

    # else
    params =
      response_type: 'code'
      redirect_uri: "http://localhost:5001/authorize_student"
      client_id: client_id
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
            redirect_uri: redirect_uri
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
    , (err, results) ->
      return next err if err?

      user_type = results.user_info.type
      console.log results.user
      console.log "********"
      # error if user is not student
      if user_type isnt "student"
        console.log "houston we have a problem!"
        return res.redirect "/" #eventually show error

      student =
        id: results.user.id
        first_name: results.user.name.first
        district: results.user.district
        grade: results.user.grade
        school: results.user.school

      req.session.student_logged_in = true
      req.session.access_token = results.token

      err = students_lib.save_student student.id, student.first_name, student.school, student.district, student.grade
      # do something if error

      res.redirect "/"
