import React from 'react'

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

export default Header