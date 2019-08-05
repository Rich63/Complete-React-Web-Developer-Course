class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       options: ["Thing one", "Thing two", "Thing four"]
    }
  }
  
  render() {
    const title = "Indecision App";
    const subTitle = "Put your life in the hands of a computer!";
    const testPropsPassing = "Testing sending props to component Header from component IndecisionApp!";

    return (
      <div className="ui container">
        <Header title={ title } subTitle={ subTitle } testPropsPassing={ testPropsPassing } />
        <Action />
        <Options options={ this.state.options } />
        <AddOption options={ this.state.options } />
      </div>
    );
  };
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subTitle }</h2>
        <p>{ this.props.testPropsPassing } <br />This is received by component Header as props!</p>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("Handle Pick")
  };

  render() {
    return (
      <div>
        <button className="ui button primary" onClick={ this.handlePick }>What should i do?</button>
      </div>
    );
  };
}

class Options extends React.Component {
  handleRemoveAll() {
    alert("Removed All options");
  };

  render() {
    return (
      <div>
        { this.props.options.map((option) => <Option key={ option } optionText={ option } />) }
        <button className="ui button primary" onClick={ this.handleRemoveAll }>Remove All Options</button>
      </div>
    );
  };
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.optionText }</p>
      </div>
    );
  };
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  };

  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
  
    if (option) {
      alert(option)
      this.props.options.push(option);
      console.log(this.props.options);
      e.target.elements.option.value = '';
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))