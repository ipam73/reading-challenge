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

  newstudent: (req, res, next) ->
    console.log "in new student"
    locals =
      bootstrap:
        student: req.session.new_student
    console.log "locals are: ", locals
    res.render "new-student", locals
