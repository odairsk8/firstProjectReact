var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello ReactJS Program 1234!</div>
    )
  }
});

ReactDOM.render(<Hello />, document.getElementById('app'));