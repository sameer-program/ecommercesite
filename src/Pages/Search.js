import React from 'react'
import ProductDescription from '../Data/ProductDescription'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
  const [query, setQuery] = useState("")

  return (
    <>
      <div className='searchbar'>
        <input type="text" placeholder="Search here anything" onChange={event => setQuery(event.target.value)} />
        <div className="src flex">
        {
          ProductDescription.filter(post => {
            if (query === '') {
              return null;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div className="box" key={index}>
              
                <img src={post.url} />
                <h2><Link to={`/details/${post.id}`}>{post.title}</Link></h2>
                <p>{post.body}</p>
              </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

