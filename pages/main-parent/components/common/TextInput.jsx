import React from "react";

function Input(props) {
  var wrapperClass = "form-group";
  if (props.error && props.error.length > 0){
    wrapperClass += " " + 'has-error';
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

module.exports = Input;
