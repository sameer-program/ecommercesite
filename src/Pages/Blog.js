import React from 'react'
import BlogData from '../Data/BlogData'
import SaleData from '../Data/SaleData'
import RecentData from '../Data/RecentData'
export default function Blog() {
  return (
    <>
      <div className='con blog-total flex'>
        <div className=' lt flex'>
          {BlogData.map((z) => (
            <div className='blog'>
              <div className='watch '>
                <img src={z.url} alt="" />
                <div className='opportunities'>
                  <div className=' rrrr flex'>
                    <div className=''><a href=''><span><i class="fa fa-calendar" aria-hidden="true"></i></span>{z.calender}</a></div>
                    <div className=''><a href=''><span><i class="fa fa-user" aria-hidden="true"></i></span>Moda</a></div>
                  </div>
                  <h3>{z.title}</h3>
                  <a href='' className=''><div className='arrow'><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='rt flex'>
          <div className='search-right'>
            <div className='search1'>
              <form>
                <label for="text" className='ssss'>Search</label><br></br>
                <input type="search" placeholder='Search' id="search" />
                <div className='icons'><i class="fa fa-search" aria-hidden="true"></i></div></form>
            </div>

          </div>
           <div className='search-right1'>
              <h1 className='sss'>Catagories</h1>
              <div className='catagories'>
                <ul>
                  <li className='un-flex'>
                    <a href=''>Uncategorized</a>
                    <span>0</span></li>
                  <li className='un-flex'>
                    <a href=''>Backpack</a>
                    <span>6</span></li>
                  <li className='un-flex'>
                    <a href=''>Bag</a>
                    <span>8</span></li>
                  <li className='un-flex'>
                    <a href=''>Best Selling Products</a>
                    <span>12</span></li>
                  <li className='un-flex'>
                    <a href=''>Cosmetics</a>
                    <span>6</span></li>
                </ul>
              </div>
            </div>
            <div className='search-right2'>
              <h1 className='recent sss'>Recent Post</h1>
              {RecentData.map((a)=>(
              <ul>
              <li className='un-flex recent1'>
                <div className='ace'>
                  <img src={a.url} />
                </div>
                <div className='ace-right'>
                  <h5>{a.title}</h5>
                  <p>{a.calender}</p></div>
                 
              </li>
              </ul>
              ))}
            </div>
            <div className='search-right3'>
              <h2 className='sss'>Instagram post</h2>
              <div className=' asss flex'>
              {SaleData.map((b)=>(
                  <div className='ace'>
                    <img src={b.url}/>
                  </div>
              ))}
              </div>
            </div>
            <div className='search-right4'>
              <h2 className='popular'>Popular tag</h2>
              <ul className='popular-list'>
                <li>Baby Dress</li>
                <li>Dress</li>
                <li>Bag</li>
                <li>Bleser</li>
                <li>Cosmetic</li>
                <li>Cotton</li>
                <li>Dress</li>
                <li>Hand</li>
                <li>BagHeel</li>     
              </ul>
            </div> 
          </div> 
        </div>
    </>
  )
}