import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>    
        <h3>{props.message} to the child component</h3>
    </div>
  )
}

export default ChildComponent