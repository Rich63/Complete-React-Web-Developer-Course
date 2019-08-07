import React from 'react'

const Action = (props) => {
  return (
    <div>
      <button 
        className="ui icon button mini green"
        onClick={ props.handlePick }
        disabled={ !props.hasOptions }
      >
          What should i do?
      </button>
    </div>
  );
}

export default Action