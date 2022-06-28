import React from 'react'
import LabelPrice from './LabelPrice'
import Quantity from './Quantity'

function CartItem ({
  lable,
  price,
  qty,
  id,
  hendleChangeQty
}){

  return (
    <div style={{dispaly:"flex",
    gap:"1rem",
    pading:"2rem",
    justifyContent:"center",
    alignItems:"center",
    border:"1px solid tomato",
    margin:"0.5rem"
    }}>
      <LabelPrice lable={lable} price={price}/>

<Quantity qty={qty}
 incrementCount={() => hendleChangeQty(id,1)}
 
 decrementCount={() => hendleChangeQty(id,-1)}
 
 
 />
      
    </div>
  )
}

export default CartItem