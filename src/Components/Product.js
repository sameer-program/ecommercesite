import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductData from '../Data/ProductData'


export default function Product() {
console.log(ProductData)
   
    return (
        <div>

            <div className='con'>
                <div className='prod flex'>
                    <h1> Best Selling Products </h1>
                    <span> View All <i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                </div>
                <div className='con mn'>
                {ProductData.map((b) => (
                    <div className='product flex'>
                        <div className=''>
                        <div className='imar'>
                            <img className='back1' src={b.url} />
                            <img className='back2' src={b.nurl}/>
                        </div>
                        <div className='introo'>
                            <p className='in' >{b.body}</p>
                            <h2 className='hone'><Link to={`/details/${b.id}`}>{b.title} </Link></h2>
                            <del className='dis'> {b.discount}</del>  <span className='spa'> {b.price}</span>
                        </div>
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div>
    )
}
