var React = require('react');

var NumberInput = React.createClass({
  propTypes: {},

  render: function() {
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0){
      wrapperClass += " " + 'has-error';
    }

    return(
        <div className={wrapperClass}>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <div className="field">
            <input type="number"
              name={this.props.name}
              className="form-control"
              placeholder={this.props.placeholder}
              ref={this.props.name}
              value={this.props.value}
              onChange={this.props.onChange}
            />
            <div className="input">{this.props.error}</div>
          </div>
        </div>
     );
  }
});

module.exports = NumberInput;