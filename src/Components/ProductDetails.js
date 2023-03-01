import React from 'react'
import { useParams } from 'react-router'
import ProductDescription from '../Data/ProductDescription'
import { useState, useEffect } from 'react';

export default function ProductDetails() {

    let { id } = useParams()
    let displaydata = ProductDescription.find((a) => a.id == id)
    const [count, setCount] = useState(0)


    return (
        <>
            <div className='con'>


                <div className='data flex'>
                    <div className='immm'>
                        <img src={displaydata.url} />
                    </div>
                    <div className='dat'>
                        <h1 className='' >{displaydata.title}</h1>
                        <del className='disr'> {displaydata.discount}</del>  <span className='spar'> {displaydata.price}</span>
                        <h5 className=''>{displaydata.pro1}</h5>
                        <h4 className=''>{displaydata.pro2}</h4>
                        <div className='borr'></div>
                        <p className=''>{displaydata.description}</p>
                        <div className='borr'></div>
                        <span>
                            <button onClick={() => setCount(count + 1)}>
                                +
                            </button>
                            <h5> {count}</h5>
                            <button onClick={() => setCount(count - 1)}>
                                -
                            </button>

                            <span className='spa'> <button className='but'> Add to Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i> </button> </span><i class="fa fa-heart-o" aria-hidden="true"></i>
                            <i class="fa fa-window-restore"
                                aria-hidden="true"></i> <i class="fa fa-share" aria-hidden="true"></i> </span>
                    </div>

                </div>

            </div>
        </>
    )
}


