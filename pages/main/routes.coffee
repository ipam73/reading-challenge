_ = require "underscore"
async = require 'async'

module.exports = (appasaurus_client, metrics) ->

  homepage: (req, res, next) ->
    name = "user"
    locals =
      name: req.session.user.name

    res.render "homepage", locals
