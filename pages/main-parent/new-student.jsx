(function () {
  var React = require('react');
  var ReactDom = require('react-dom');

  var StudentConfirm = React.createClass({
    render: function() {
      return <div>
        <div>
          <h2>Name: {this.props.student.name.first}</h2>
          <h2>District: {this.props.student.district}</h2>
          <h2>Grade: {this.props.student.grade}</h2>
        </div>
      </div>;
    }
  });

  var init = function() {
    console.log("in init of new student")
    ReactDom.render(<StudentConfirm
      student={window.Bootstrap.student}/>,
      document.getElementById('new-student'));
  };

  init();

})();
