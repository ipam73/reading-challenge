_ = require "underscore"
async = require 'async'

module.exports = (appasaurus_client, metrics) ->

  homepage: (req, res, next) ->
    locals =
      bootstrap:
        parent:
          name:
            first: "Pam"
            last:"Martinez"

    res.render "parent-homepage", locals
