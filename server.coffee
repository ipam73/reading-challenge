express = require 'express'
http = require 'http'
config = require './config'
env = require 'node-env-file'
env('./clever-creds.env')

module.exports = () ->
  app = express()

  app.set 'view engine', 'jade'
  app.set 'views', './views'
  app.set 'view engine', 'jade'

  main_routes = require('./main/routes')()
  app.get '/', main_routes.homepage

  http.createServer(app).listen config.PORT, ->
    console.log "reading-challenge listening on port #{config.PORT}"

if require.main is module
  module.exports()
