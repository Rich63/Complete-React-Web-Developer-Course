import React from 'react'

const Option = (props) => (
  <div className="ui container">
    { props.optionText }
    <button 
      className="ui button tiny red floated='right'"
      onClick={() => {
        props.handleDeleteOption(props.optionText);
      }}
    >
    X
    </button>
  </div>
);

export default Option;