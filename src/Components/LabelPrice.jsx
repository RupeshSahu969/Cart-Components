import React from 'react'

function LabelPrice ({lable,price}) {


  return (
    <div style={{display: "flex", 
    gap: "1rem"
    ,
    border:"1px solid tomato",
    
    }}>

      <div>{lable}</div>
      <div> {price}</div>
    </div>
  )
}

export default LabelPrice