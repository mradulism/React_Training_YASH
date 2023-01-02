import React from 'react'
import ChildComponentFunction from './ChildComponentFunction';

const ParentComponentFunction = () => {
    const alertData=(data)=>{
        alert(data);
    }
  return (
    <div>
        <ChildComponentFunction function = {alertData}/>
    </div>
  )
}

export default ParentComponentFunction