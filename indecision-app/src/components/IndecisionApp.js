import React from 'react'

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState( () => ({ options: [] }) )
  }

  handleModal = () => {
    this.setState( () => ({ selectedOption: undefined }) )
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    this.setState( () => ({ selectedOption: option }) )
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists!';
    }

    this.setState((prevState) => ({ options: prevState.options.concat(option) }) )
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
  
  render() {
    const subTitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subTitle={ subTitle } />
        <div className="container">
          <Action
            hasOptions={ this.state.options.length > 0 }
            handlePick={ this.handlePick }
          />
          <div className="widget">
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
        </div>
        <OptionModal
          selectedOption={ this.state.selectedOption }
          handleModal= { this.handleModal }
        />
      </div>
    );
  };
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;