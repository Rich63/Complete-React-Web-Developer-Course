import React from 'react'

// Stateless Functional Component
const User = (props) => {
  return (
    <div>
      <p>Name: { props.name }</p>
      <p>Age: { props.age } </p>
    </div>
  );
}

export default User