class Counting extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrease() {
    this.setState((prevState) => { 
      return { count: prevState.count + 1 }
    });
  }
  
  handleDecrease() {
    this.setState((prevState) => { 
      return { count: prevState.count - 1 }
    });
  }
  
  handleReset() {
    this.setState(() => { 
      return { count: 0 }
    });
  }

  render() {
    return (
      <div className="ui container">
        <h1>Count: { this.state.count }</h1>
        <button className="ui button green" onClick={ this.handleIncrease }>+</button>
        <button className="ui button red" onClick={ this.handleDecrease }>-</button>
        <button className="ui button grey" onClick={ this.handleReset }>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counting />, document.getElementById('app'))