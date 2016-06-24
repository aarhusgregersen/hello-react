var React           = require('react');
var ReactDOM        = require('react-dom');
var GreeterMessage  = require('./components/GreeterMessage');
var GreeterForm     = require('./components/GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message:  'This is a default component for msg in use'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.props.message;

    return(
      <div>
      <GreeterMessage name={name} message={message}/>
      <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter name={name} message={message}/>,
  document.getElementById('app')
);
