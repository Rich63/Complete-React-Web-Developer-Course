class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
  
    this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
    this.handleDeleteOption=this.handleDeleteOption.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
       options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) { this.setState(() => ({ options })) }
    } catch (e) { 
      // do nothing at all 
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });

    //below code does exactly do the same as above code
    this.setState( () => ({ options: [] }) )
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }) )
  }
  
  render() {
    const subTitle = "Put your life in the hands of a computer!";

    return (
      <div className="ui text container">
        <Header subTitle={ subTitle } />
        <Action
          hasOptions={ this.state.options.length > 0 }
          handlePick={ this.handlePick }
        />
        <Options
          options={ this.state.options }
          hasOptions={ this.state.options.length > 0 }
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption }
        />
        <AddOption
          options={ this.state.options }
          handleAddOption={ this.handleAddOption }
        />
      </div>
    );
  };
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div className="ui container">
      <h1>{ props.title }</h1>
      { props.subTitle && <h2>{ props.subTitle }</h2> }
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        className="ui button primary"
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >
          What should i do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button className="ui button" disabled={ !props.hasOptions } onClick={ props.handleDeleteOptions }>Remove all</button>
      { props.options.length === 0 && <p>Please add an option to get started!</p> }
      {
        props.options.map(option => (
          <Option 
            key={ option } 
            optionText={ option } 
            handleDeleteOption={ props.handleDeleteOption } 
          />
        ))
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button 
        className="ui icon button red"
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >
      X
      </button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption=this.handleAddOption.bind(this);

    this.state = {
      error: undefined
    }
  }
  
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
  
    this.setState( () => ( { error }) )

    if (!error) { e.target.elements.option.value = ""; }  // empty the input field when there is no error
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  };
}

// Stateless Functional Component
const User = (props) => {
  return (
    <div>
      <p>Name: { props.name }</p>
      <p>Age: { props.age } </p>
    </div>
  );
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))