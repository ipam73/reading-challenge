import React from "react";
import {Link} from "react-router";

function AddTimeButton(props) {
  return (
    <div>
      <Link to={`/addtime/${props.studentID}`} className="btn btn-default">Add Time</Link>
    </div>
  );
}

module.exports = AddTimeButton;
