
import React from 'react'

export default function Cart() {

  const cartItem = JSON.parse(sessionStorage.getItem('cart-items'));
  console.log(cartItem);

  
  const totalItems = cartItem.length;
  const totalAmount = Object.keys(cartItem).reduce(
  (prevVal, currentVal) =>
    prevVal + +cartItem[currentVal].price.replace("$", ""),
  0
)


console.log(totalAmount)
console.log(totalItems)
    
  
  return (
    <div className='ctct'>
        <h1> Cart Items List </h1>
    <div className="ct flex">
      {cartItem.map((item) => (

        <div className="gal">
          <div className="back">
            <img className='back1' src={item.url} alt="" />
            
            <div className="line">
            </div>

          </div>
          <div className="bold">
            <p>{item.body}</p>
            <h4>{item.title}</h4>
           <span>{item.price}</span>
            <p>{item.amount}</p>
            <button ><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
        </div>
      ))}

      </div>

      <h3> Total Items: {totalItems} </h3>


      <h1> Total Amount: {totalAmount} </h1>

    </div>
  )
}
