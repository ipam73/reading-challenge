(function () {
  var React = require('react');
  var ReactDom = require('react-dom');

  var Quiz = React.createClass({
    propTypes: {
        books: React.PropTypes.array.isRequired
    },
    render: function() {
      return <div>
        {this.props.books.map(function(b){
          return <Book title={b} />;
        })}
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
    ReactDom.render(<Quiz books={["Harry Potter", "The Iliad"]}/>,
      document.getElementById('jsx-app'));
  };

  init();

})();
