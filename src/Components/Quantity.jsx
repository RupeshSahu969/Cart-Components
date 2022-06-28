import React from 'react'
import Button from "./Button"

function Quantity({
  qty,
  incrementCount,
  decrementCount

}){



  return (
    <div style={{display:"flex",
     gap:"1rem"
     ,
     border:"1px solid tomato"
     }}>

<Button  disabled={qty === 0} 
onClick={() =>decrementCount(-1)} >-</Button>
<div>
  <h4>{qty}</h4>
</div>
      
<Button onClick={() =>incrementCount(+1)} >+</Button>

    </div>
  )
}


 


export default Quantity