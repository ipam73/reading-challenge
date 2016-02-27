(function () {
  var React = require('react');
  var ReactDom = require('react-dom');

  var ParentSelect = React.createClass({
    render: function() {
      return <div>
        <div>
          <h2>{this.props.parent.name.first} {this.props.parent.name.last}</h2>
        </div>
        <NewStudent/>
        <div>
          {this.props.students.map(function(student){
            return <Student name={student.name} key={student.id}/>;
          })}
        </div>
      </div>;
    }
  });

  var Student = React.createClass({
    render: function() {
      return <div><h4>{this.props.name}</h4></div>;
    }
  })

  var NewStudent = React.createClass({
    render: function() {
      return <div>
        <a href="/addstudent">Add a student</a>
      </div>
    }
  })

  var init = function() {
    ReactDom.render(<ParentSelect
      students={[{name:"Liz", id:"123"}, {name:"Mark", id:"1234"}]}
      parent={window.Bootstrap.parent}/>,
      document.getElementById('parent-home'));
  };

  init();

})();
