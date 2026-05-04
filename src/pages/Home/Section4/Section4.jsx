import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/Header.images/876ac4f8fde38cefa4071c4dec4f8d125e8787a7.jpg'

const Section4 = memo(() => {

    const houses = [
        { id: 1, src: img1 },
        { id: 2, src: img1 },
        { id: 3, src: img1 },
        { id: 4, src: img1 },
        { id: 5, src: img1 },
    ];

    return (
        <>

            <section className="w-full py-10 md:py-20 bg-white">
                <div className="max-w-[1400px] mx-auto px-4">

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20} 
                        slidesPerView={1} 
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.5, 
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1.8, 
                                spaceBetween: 40,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className} custom-bullet"></span>`;
                            },
                        }}
                        className="house-swiper"
                    >
                        {houses.map((house) => (
                            <SwiperSlide key={house.id}>
                                <div className="relative overflow-hidden shadow-lg transition-all duration-500">
                                    <img
                                        src={house.src}
                                        alt="House"
                                        className="w-full h-[300px] md:h-[600px] object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <style dangerouslySetInnerHTML={{
                        __html: `
          .house-swiper {
            padding-bottom: 60px !important;
          }
          .custom-bullet {
            width: 40px !important;
            height: 4px !important;
            background: #D1D1D1 !important;
            border-radius: 0 !important;
            opacity: 1 !important;
            display: inline-block;
            margin: 0 5px !important;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #E29853 !important; /* Ранги норинҷӣ */
            width: 60px !important;
          }
          /* Эффект барои суратҳои паҳлӯ (opacity) */
          .swiper-slide {
            opacity: 0.4;
            transition: opacity 0.5s;
          }
          .swiper-slide-active {
            opacity: 1;
          }
        `}} />
                </div>
            </section>

        </>
    )
})

export default Section4