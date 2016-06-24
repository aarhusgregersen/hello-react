var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      msg:  'This is a default component for msg in use'
    };
  },
  render: function() {
    var name = this.props.name;
    var msg = this.props.msg;

    return(
      <div>
        <h1>Hello {name}, this is rendered from javascript!</h1>
        <p>{msg}</p>
      </div>
    );
  }
});

var msg = 'This is a variable component in use';

ReactDOM.render(
  <Greeter name="Martin Gregersen" msg={msg}/>,
  document.getElementById('app')
);
