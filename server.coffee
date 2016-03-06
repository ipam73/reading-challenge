express = require 'express'
session = require 'express-session'
http = require 'http'
config = require './config'
env = require 'node-env-file'

ensure_logged_in = (req, res, next) ->
  # return res.redirect '/login' unless req.session?.user
  next()

module.exports = () ->
  app = express()

  session_opts =
    secret: config.SESSION_SECRET
    fingerprint: -> ""
    proxy: true
    cookie: httpOnly: true
    key: "reading-challenge-development.sid"
    saveUninitialized: true
    resave: false
  app.use session(session_opts)

  # if is_production
  #   redirect_uri = "https://#{config.HOST}/oauth"
  # else
  redirect_uri = "http://#{config.HOST}:#{config.PORT}/oauth"

  auth_routes = require("#{__dirname}/pages/auth/routes") config.CLIENT_ID, config.CLIENT_SECRET, redirect_uri, config.SESSION_SECRET, config.AUTH_URL, config.API_URL
  main_metrics_routes = require("#{__dirname}/pages/main-metrics/routes")()
  main_parent_routes = require("#{__dirname}/pages/main-parent/routes")()

  app.use express.static(__dirname + '/public')

  app.set 'view engine', 'jade'
  app.set 'views', './views'
  app.set 'view engine', 'jade'

  # app.get '/oauth', auth_routes.oauth
  # app.get '/login', auth_routes.login
  # app.get '/logout', auth_routes.logout

  # parent route, should only see if a parent
  app.get '/', main_parent_routes.homepage
  # app.get '/addstudent', auth_routes.addstudent
  # app.get '/newstudent', main_parent_routes.newstudent

  # All routes before this can be accessed without being logged in
  # app.use ensure_logged_in
  # app.get '/', main_parent_routes.goHome

  http.createServer(app).listen config.PORT, ->
    console.log "reading-challenge listening on port #{config.PORT}"

if require.main is module
  module.exports()
