import React from "react";
import {Link} from "react-router";
import SummaryPanel from "./SummaryPanel";

function StudentList(props) {
  return (
    <div>
      <div>
        {Object.keys(props.students).map(
          function(student_id, i){
            console.log(student_id, i);
            return (
              <SummaryPanel
                key={student_id}
                student={props.students[student_id]}
              />);
          }, this
        )}
      </div>
    </div>
  );
}

StudentList.propTypes = {
  students: React.PropTypes.object.isRequired,
};

module.exports = StudentList;
