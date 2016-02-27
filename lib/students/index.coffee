async = require 'async'
fs    = require 'fs'

module.exports = (pg_client) ->
  pg_client.connect (err) ->
    if err?
      console.error "get_maus error:", err
      return err
    console.log "connected!"

  # get_maus_for_app gets the below metrics for the app_id passed
