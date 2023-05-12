import React from 'react'

const Components = ({ result }) => {
  return (
    <div>
      <div>
        <p>Id: {result._id.toString()}</p>
        <p>make: {result.make}</p>
        <p>model: {result.model}</p>
        <p>price: {result.price}</p>
      </div>
    </div>
  )
}

export default Components
