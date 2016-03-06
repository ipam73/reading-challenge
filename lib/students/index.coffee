#This file is mocking a web API by hitting hard coded data.
students = require('./student_data').students
_ = require "underscore"

module.exports =
  get_all_students: () ->
    return _.clone(students)

  get_student: (student_id) ->
    student_data = _.clone(students)
    return _.find student_data, (student) -> return student.id is student_id

  save_student: (student) ->
    console.log "student: ", student
    console.log "saving right now!"
    return student