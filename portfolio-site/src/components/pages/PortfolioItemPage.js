import React from 'react'

const PortfolioItemPage = (props) => {
  return (
    <div>
      <h1>A thing that I've done</h1>
      <a>This page is the item with id of { props.match.params.id }</a>
    </div>
  )
}

export default PortfolioItemPage;