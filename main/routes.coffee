_ = require "underscore"
async = require 'async'

module.exports = (appasaurus_client, metrics) ->

  homepage: (req, res, next) ->
    name = "Pamela Martinez"
    locals =
      pageTitle: "Reading Challenge"
      name: name

    res.render "homepage", locals
