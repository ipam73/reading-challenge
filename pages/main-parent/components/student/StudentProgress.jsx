import React from "react";

var StudentProgress = React.createClass({
  propTypes: {
    progress: React.PropTypes.array.isRequired
  },

  render: function() {
    var createProgressRow = function(progress) {
      return (
        <tr key={progress.date}>
          <td>{progress.date}</td>
          <td>{progress.mins}</td>
        </tr>
      )
    };

    return <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Progess</h3>
        </div>
        <div className="panel-body">
          <table>
            <thead>
              <tr>
                <th>{"Date "}</th>
                <th>Minutes read </th>
              </tr>
            </thead>
            <tbody>
              {this.props.progress.map(createProgressRow, this)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
});

module.exports = StudentProgress;
