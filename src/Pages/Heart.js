import React from 'react'
import { useState } from 'react'

export default function Heart() {
  const [show, setShow] =useState(true)
  return (
    <>
<div className="con">
    <div className="heart flex">
       <ul>
        <li><a href="">Product name</a></li>
        <li><a href="">	Price</a></li>
        <li><a href="">	Quantity</a></li>
        <li><a href="">Stock status</a></li>
        <li><a href="">Action</a></li>
       </ul>
    </div>
    <p className='pp'>No products added to the wishlist</p>
    </div>
    </>
  )
}
