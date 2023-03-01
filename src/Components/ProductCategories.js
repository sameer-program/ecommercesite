import React from 'react'
import CategData from '../Data/CategData'
import ProductData from '../Data/ProductData'
import { Link } from 'react-router-dom'

export default function ProductCategories() {

    return (
        <>
            <div className='con'>
                <div className="categories flex">
                    <div className='prot'>
                        <div className='prot1'>
                        <h2>Product categories </h2>
                        {CategData.map((a) => (
                                <ul>
                                    <li><Link to=''>{a.title}</Link></li>
                                </ul>
                            ))}

                        </div>
                        <div className='prot3'>
                        <h2>Price </h2>
                        <ul>
                            <li><a href="">bagpack</a></li>
                            <li><a href="">bagpack</a></li>
                            <li><a href="">bagpack</a></li>
                            <li><a href="">bagpack</a></li>
                            <li><a href="">bagpack</a></li>
                            <li><a href="">bagpack sdsdsd</a></li>
                        </ul>
                       <p>Warning: Undefined variable $template in /home/maantheme/public_html/moda/wp/moda/wp-content/plugins/color-filters/views/View.Filtering.class.php on line 342</p>
                        </div>
                        
                    </div>
                    <div className='prot2'>
                        <div className='view flex'>

                            <h3>Showing all 8 results</h3>
                            <h4>Default Sorting </h4>
                            <h2> View</h2>
                            <i class="fa fa-th" aria-hidden="true"></i>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className='result flex'>
                        {ProductData.map((a) => (
                                <div className='abc'>
                                    <img src={a.url} />
                                    <h1><Link to={`/details/${a.id}`}>{a.title} </Link></h1>
                                    <h2>{a.body}</h2>
                                    <h3><del>{a.discount}</del> {a.price}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>          
            </div>
        </>
    )
}
