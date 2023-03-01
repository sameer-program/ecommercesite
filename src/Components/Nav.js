import React from 'react'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Details from '../Pages/Details';
import Blog from '../Pages/Blog';
import Account from '../Pages/Account';
import Categ from '../Pages/Categ';
import Info from '../Pages/Info';
import Search from '../Pages/Search';
import Shop from '../Pages/Shop';
import Pages from '../Pages/Pages';
import About from '../Pages/About';
import Heart from '../Pages/Heart';
import Cart from '../Pages/Cart';
import { useState } from 'react'

export default function Nav() {
    const [show, setShow] = useState(false)
    const [ nav, setNav] = useState(false)

    //  const cartItem = JSON.parse(sessionStorage.getItem('cart-items'));
    //  console.log(cartItem);


    return (
        <>
            <div className='Navbar'>
            <div className={!nav ? "" : "black"} onClick={() => (setNav(!nav)
                            )}></div>
                <div className='con'>
                    <div className=' flex'>
                        <div className='logo'>
                            <Link to='/'><img src={require('../img/1.png')} /></Link>
                        </div>

                            <ul className='nav'>
                                <li className='hbar flex'> <Link to='/'> Home
                                    <ol>
                                        <li><a href=""> Fashion  </a></li>
                                    </ol></Link> </li>
                                <li> <Link to='/shop'>Shop </Link></li>
                                <li> <Link to='/about'> About </Link> </li>
                                <li> <Link to='/blog'>Blog </Link></li>
                                <li> <Link to='/pages'>Pages </Link></li>
                                <li> <Link to='/contact'> Contact </Link></li>
                            </ul>

                            <i className='fa fa-bars' onClick={() => setNav(!nav)}></i>
                        <div className='icons'>
                            <ul>
                                <li> <Link to='/search'><i class="fa fa-search" aria-hidden="true"></i> </Link></li>
                                <li> <Link to='/heart'><i class="fa fa-heart-o" aria-hidden="true"></i> </Link><span className='zero'> 0 </span> </li>
                                <li> <Link to='/cart'><i class="fa fa-shopping-bag" aria-hidden="true"></i></Link> <span className='zero'> 0 </span>  </li>
                                <li> <Link to='/profile'> <i class="fa fa-user" aria-hidden="true"></i> </Link></li>
                                {/* <li onClick={() => setNav(!nav)}><i class="fa fa-bars" aria-hidden="true"></i>
                                    {
                                        show ? < div className='bared'>
                                            <div className="fal"><i class="fa fa-times" aria-hidden="true"></i></div>
                                            <img src={require('../img/1.png')} />
                                            <p>We proudly dedicate ourselves to shaping the world in which every woman feels the comfort and inspiration needed to develop and express her personal sense of style. Clothes and accessories are extensions that color the day of modern women.</p>
                                            <h3> New Arrivals </h3>
                                            <div className="arv flex">
                                                <img src={require('../img/75.png')} />
                                                <img src={require('../img/77.png')} />
                                                <img src={require('../img/78.png')} />
                                                <img src={require('../img/79.png')} />

                                            </div>
                                            <div className="lit">
                                                <ul>
                                                    <li> <a> Wishlist </a> </li>
                                                    <li> <a> MyAccount </a> </li>
                                                    <li> <a> Faq </a> </li>
                                                </ul>
                                            </div>
                                        </div> : null
                                    }
                                </li> */}
                                 
                            
                           
                           
                            
                            
                                 {/* <ul className={!show ? "" : "right"}>
                                    <div className="cross">
                                    <i className='fa fa-times text-dark' onClick={() => setNav
                                (!nav)}></i>
                                    </div>
                                    <li > <Link to='/'> Home</Link> </li>
                                <li> <Link to='/shop'>Shop </Link></li>
                                <li> <Link to='/about'> About </Link> </li>
                                <li> <Link to='/blog'>Blog </Link></li>
                                <li> <Link to='/pages'>Pages </Link></li>
                                <li> <Link to='/contact'> Contact </Link></li>
                                </ul>
                                <div className={!nav ? "" : "black"} onClick={() => (setNav(!nav))}></div> */}
                                {/* <div className="response-nav">
                                <i className='fa fa-bars text-dark' onClick={() => setNav
                                (!nav)}></i>
                                <ul className={!show ? "" : "right"}>
                                    <div className="cross">
                                    <i className='fa fa-times text-dark' onClick={() => setNav
                                (!nav)}></i>
                                    </div>
                                    <li > <Link to='/'> Home</Link> </li>
                                <li> <Link to='/shop'>Shop </Link></li>
                                <li> <Link to='/about'> About </Link> </li>
                                <li> <Link to='/blog'>Blog </Link></li>
                                <li> <Link to='/pages'>Pages </Link></li>
                                <li> <Link to='/contact'> Contact </Link></li>
                                </ul>
                            </div> */}
                           
                            </ul>
                        </div>
                       
                        <ul className={!nav ? "response-nav" : "response-nav right"}>
                                <div className="cross" onClick={() => setNav(!nav)}> 
                                    <i className='fa fa-times text-dark' ></i>
                                </div>
                                <li><Link to="/" onClick={() => (setNav(!nav)
                            )}>Home</Link></li>
                                <li>
                                    <Link to="/shop" onClick={() => (setNav(!nav)
                            )}>Shop</Link>
                                </li>
                                <li> <Link to="/about" onClick={() => (setNav(!nav)
                            )}>About</Link> </li>
                                <li> <Link to="/blog" onClick={() => (setNav(!nav)
                            )}>Blog</Link> </li>
                                <li><Link to="/pages" onClick={() => (setNav(!nav)
                            )}>Pages</Link></li>
                                <li><Link to="/contact" onClick={() => (setNav(!nav)
                            )}>Contact</Link></li>
                            </ul>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/profile" element={<Account />} />
                <Route path="/heart" element={<Heart />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/categ" element={<Categ />} />
                <Route path="/information/:did" element={<Info />} />
                <Route path="/details/:id" element={<Details />} />

            </Routes>
        </>
    )
}

