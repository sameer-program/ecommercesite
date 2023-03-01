import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import DealData from '../Data/DealData';
import { Link } from 'react-router-dom';

const Deal = () => {

    const [cart, setCart] =useState([]);

    const handleClick = (item) =>{
    setCart([...cart, item])
    console.log(cart);

    sessionStorage.setItem("cart-items", JSON.stringify(cart))
    }

    return (
        <div className='con'>
            <div className="slide">
                <div className="deals flex">
                    <h1>Deal Of The Days
                    </h1> <h5>End in: <span>23D</span><span>16H</span><span>8M</span><span>29S</span></h5>
                </div>
                <div className="gallery flex">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            0:{
                                slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            990: {
                              slidesPerView: 4,
                              spaceBetween: 50,
                            }}}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >

                        {DealData.map((item) => (
                            <SwiperSlide>
                                <div className="gal">
                                    <div className="back">
                                        <img className='back1' src={item.url} alt="" />
                                        <img className='back2' src={item.nurl} alt="" />
                                        <div className="line">
                                        </div>

                                    </div>
                                    <div className="bold">
                                        <p>{item.body}</p>
                                        <h4><Link to={`/information/${item.id}`}>{item.title}</Link></h4>
                                        <del>{item.discount}</del><span>{item.price}</span>
                                        <p>{item.amount}</p>
                                    </div>
                                    <div className='crt' onClick={()=>handleClick(item)} > <i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>

    )
}
  
export default Deal;