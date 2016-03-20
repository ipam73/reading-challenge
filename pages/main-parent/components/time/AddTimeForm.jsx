"use strict";

var React = require('react');
var Input = require('../common/TextInput')
var DatePicker = require('react-datepicker');

var AddTimeForm = React.createClass({
  propTypes: {
    readDate: React.PropTypes.object.isRequired,
    readMinutes: React.PropTypes.string.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onMinsChange: React.PropTypes.func.isRequired,
    onDateChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object,
  },

  render: function() {
    return (
      <form>
        <h2>Log Time</h2>

        <DatePicker
          selected={this.props.readDate}
          onChange={this.props.onDateChange}
          maxDate={this.props.maxDate}
        />

        <Input
          name="minutes"
          label="Minutes Read"
          placeholder="Minutes read"
          value={this.props.readMinutes}
          onChange={this.props.onMinsChange}
          error={this.props.errors.minutes}
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

module.exports = AddTimeForm;
