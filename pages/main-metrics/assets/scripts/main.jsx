(function () {
  var React = require('react');
  var ReactDom = require('react-dom');

  var Quiz = React.createClass({
    propTypes: {
        books: React.PropTypes.array.isRequired
    },
    render: function() {
      return <div>
        <div>
          <h2>{this.props.name.first} {this.props.name.last}</h2>
        </div>
        <div>
          {this.props.books.map(function(b){
            return <Book title={b} />;
          })}
        </div>
      </div>;
    }
  });

  var Book = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
      return <div><h4>{this.props.title}</h4></div>;
    }
  })

  var init = function() {
    ReactDom.render(<Quiz books={["Harry Potter", "The Iliad"]} name={window.Bootstrap.parent}/>,
      document.getElementById('jsx-app'));
  };

  init();

})();
