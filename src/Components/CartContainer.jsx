import React ,{useState}from 'react'
import CartItem from "./CartItem"
import Total from "./Total"

const initData=[
  {
    id:1,
    product_name: "Nodles",
    price: 30,
    qty: 1
  },
  {
    id:2,
    product_name: "Biriyani",
    price: 90,
    qty: 2
  },
  {
    id:3,
    product_name: "Chips",
    price: 10,
    qty: 3
  },
]
function calculateTotal(products){
  return products.reduce((acc,c)=>
  acc+ (c.qty * c.price),0
  )
}


const CartContainer = () => {

  const [data, setData] = useState(initData)

  const hendleChangeQty= (id,amount) => {

    let updateData=data.map(item => {
      if(item.id === id)
      {
        return{
          ...item,
          qty: item.qty +amount
        }
      }
      else{
        return item
      }
    })
    setData(updateData)
  }

  return (
    <div style={{border:"1px solid tomato"}}>
      {
        data.map(item => 
          <CartItem
          
          key={item.id}
          id={item.id}
          lable={item.product_name}
          qty={item.qty}
          price={item.price}
          hendleChangeQty={hendleChangeQty}
          
          />
          )
      }
<Total total={calculateTotal(data)} />
    </div>
  )
}

export default CartContainer