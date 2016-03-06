"use strict";

var React = require('react');

var Input = require('../common/TextInput')

var StudentForm = React.createClass({
  propTypes: {
    student: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
  },

  render: function() {
    return (
      <form>
        <h2>Add Student</h2>

        <Input
          name="firstName"
          label="First Name"
          placeholder="First Name"
          value={this.props.student.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
        />

        <Input
          name="grade"
          label="Grade"
          placeholder="Grade"
          value={this.props.student.grade}
          onChange={this.props.onChange}
          error={this.props.errors.grade}
        />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave}
        />
      </form>
    );
  }
});

module.exports = StudentForm;

