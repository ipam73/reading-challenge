import React from "react";

function Input(props) {
  var wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="text">
        <input
          type="number"
          name={props.name}
          className="form-control"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        <div className="input">{props.error}</div>
      </div>
    </div>
   );
}

Input.propTypes = {
  error: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.node,
  onChange: React.PropTypes.func,
};

module.exports = Input;
