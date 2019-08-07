import React from 'react'

const Option = (props) => {
  return (
    <div>
      { props.optionText }
      <button 
        className="ui icon mini button red"
        onClick={() => {
          props.handleDeleteOption(props.optionText);
        }}
      >
      X
      </button>
    </div>
  );
}

export default Option;