#This file is mocking a web API by hitting hard coded data.
students_original = require('./student_data').students
_ = require "underscore"

students = _.clone(students_original)

get_all_students = () ->
  return _.clone(students)

get_student = (student_id) ->
  return _.find students, (student) -> return student.id is student_id

### student schema
  {
    id: '1233',
    name: 'Pam',
    school: 'Elementary School',
    total_mins: 445,
    goal: 60,
    grade: '4'
    progress: [
      {date: 1, mins: 45},
      {date: 2, mins: 10},
      {date: 3, mins: 65}
    ]
  }
###
save_student = (student_id, first_name, school_id, school_name, district_id, grade) ->
  console.log "saving right now!"
  student_to_save =
    id: student_id
    name: first_name
    school_id: school_id
    school_name: school_name
    district_id: district_id
    grade: grade
    total_mins: 0

  existing_student = _.find students, (student) -> return student.id is student_id
  students.push student_to_save unless existing_student

  return null

add_time = (some_value) ->
  console.log "adding time: ", some_value
  console.log "saving right now!"
  return some_value


module.exports =
  get_all_students: get_all_students
  get_student: get_student
  save_student: save_student
  add_time: add_time
