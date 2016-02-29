#This file is mocking a web API by hitting hard coded data.
students = require('./student_data').students
_ = require "underscore"

module.exports =
  get_all_students: () ->
    return _.clone(students)
