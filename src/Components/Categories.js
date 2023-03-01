import React from 'react'
import { Link } from 'react-router-dom'
import CatData from '../Data/CatData'

export default function Categories() {
    return (
        <>
            <div className=''>
                <div className='categ'>
                <div className='topic'>
                        <img src={require('../img/20.svg').default} />
                        <h1>Our Top Categories</h1>
                    </div>
                    <Link to={'/categ'}>
                    <div className='svv flex'>
                    {CatData.map((a)=>
                    <div className='sv'>
                    <img src={a.url} />
                    <h3> {a.title} </h3>
                    </div> 
                   
                    )}
                  
                     </div>
                     </Link>
                </div>
            </div>
        </>
    )
}
