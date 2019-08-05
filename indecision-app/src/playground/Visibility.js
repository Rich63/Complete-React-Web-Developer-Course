class Visibility extends React.Component {
  constructor(props) {
    super(props)
  
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      title: 'Visability Toggle',
      detail: 'Hey. These are some details you can now see!',
      show: false
    }
  }
    
  handleToggleVisibility() {
    this.setState((prevState) => { 
      return { show: !prevState.show }
    })
  }

  render() {
    return (
      <div className="ui container">
        <h1>{ this.state.title }</h1>
        <button onClick={ this.handleToggleVisibility }>
          { (this.state.show) ? 'Hide details' : 'Show details' }
        </button>
        {this.state.show && (
          <div>
            <br />
            <p>{ this.state.detail }</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))