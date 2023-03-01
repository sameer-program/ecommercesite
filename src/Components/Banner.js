import React from 'react'
import { useParams } from 'react-router-dom'
import BannerData from '../Data/BannerData'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css/bundle';
import { Autoplay, Navigation } from 'swiper';


export default function Banner() {

    return (
        <>
            <div className='frd'>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                   
                    autoplay={{
                        delay:2500,
                        disableOnInteraction:false,
                    }}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {BannerData.map((a) => (
                        <SwiperSlide><div className='banner flex'>
                            <div className='intro'>
                                <h1 className='int' >{a.title}</h1>
                                <div className='line'></div>
                                <p className='par' dangerouslySetInnerHTML={{ __html: `${a.body}` }}></p>
                                <div className='arrow'><i class="fa fa-long-arrow-right" aria-hidden="true"></i> </div>
                                <p className='ppp'> {a.id}/3</p>
                            </div>
                            <div className='backgrd'>
                            <div className="lnk">
                                <ul>
                                    <li><a href="https://facebook.com">Facebook</a></li>
                                    <li><a href="https://instagram.com">Instagram</a></li>
                                    <li><a href="https://twitter.com">Twitter</a></li>
                                    <li><a href="https://youtube.com">Youtube</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className='imag'>
                                <img src={a.url} />
                            </div>
                            <div className='fr'>
                            <img src={require('../img/shape2.svg').default} />
                            </div>
                           
                        </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
