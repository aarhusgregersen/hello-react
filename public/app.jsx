var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      msg:  'This is a default component for msg in use'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    };
  },
  render: function() {
    var name = this.state.name;
    var msg = this.props.msg;

    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set name</button>
        </form>
      </div>
    );
  }
});

var msg = 'This is a variable component in use';

ReactDOM.render(
  <Greeter name="Martin Gregersen" msg={msg}/>,
  document.getElementById('app')
);
