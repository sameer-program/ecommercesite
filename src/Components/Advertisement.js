import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css/bundle';
import AdvData from '../Data/AdvData';

export default function Advertisement() {
    return (
        <>
            <div className=''>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
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
                    {AdvData.map((a) => (
                        <SwiperSlide><div className='adi flex'>
                            <div className='adim'>
                                <img src={a.url} />
                            </div>
                        </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='footer flex'>
       <div className='one'>
        <h1>Subscribe To Our Newsletters!</h1>
        <input placeholder='Enter Your Email'></input>
        <p>By entering your email, you agree to our Terms of<br/> Service and Privacy Policy.</p>
        <h4> <span>Follow Us:  <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i><i class="fa fa-instagram" aria-hidden="true"></i> <i class="fa fa-youtube-play" aria-hidden="true"></i> </span></h4>

       </div>
        <div className='two'>
            <h1>Info</h1>
            <ul>
                <li><a href="">About Us</a></li>
                <li><a href="">Shipping And Returns</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">404 Page</a></li>
                <li><a href="">Maintenance</a></li>
            </ul>
        </div>
        <div className='three'>
            <h1>Our Policies</h1>
            <ul>
            <li><a href="">FAQs</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
            <li><a href="">Terms And Conditions</a></li>
            </ul>
        </div>
        <div className="four">
            <h1>Our Store</h1>
            <p>2548 Broaddus Maple Court Avenue, Madisonville KY<br/> 4783, United States of America</p>
            <p>Call Us: <span>1–234–5678901</span></p>
            <p>Mon-Sun: 9:00am - 9:00pm</p>
        </div>
    </div>
    <div className='last flex'>
        <img src={require('../img/card-1.png')}/>
       <p> © 2022 Moda Fashion Store. All Rights Reserved. Ecommerce Software Theme by <span>Maan Theme</span></p>
    </div>
            </div>

            
            
        </>
    )
}
