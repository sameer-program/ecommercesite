import React from 'react'
import { useParams } from 'react-router'
import DealDescription from '../Data/DealDescription';
import { useState, useEffect } from 'react';

export default function Information() {
    let { did } = useParams()
    let displaydataP = DealDescription.find((q) => q.id == did)
    const [count, setCount] = useState(0);

    return (
        <>
            <div className='con'>
                <div className='data flex'>
                    <div className='immm'>
                        <img src={displaydataP.url}/>
                    </div>
                    <div className='dat'>
                        <h1 className='' >{displaydataP.title}</h1>
                        <del className='disr'> {displaydataP.discount}</del>  <span className='spar'> {displaydataP.price}</span>
                        <h5 className=''>{displaydataP.pro1}</h5>
                        <h4 className=''>{displaydataP.pro2}</h4>
                        <div className='borr'></div>
                        <p className=''>{displaydataP.description}</p>
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
