import  { memo } from 'react'
import { Swiper, SwiperSlide , } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../../assets/images/c6c33d5498b4277a1f97a6f09a7d458b9ca4f259.jpg'
const Section5Villages = memo(() => {


    const builtHouses = [
  {
    id: 1,
    image: img1, 
    title: 'Проект WIN19',
    year: 'дом сдан в 2020 году',
  },
  {
    id: 2,
    image: img1,
    title: 'Проект WIN20',
    year: 'дом сдан в 2021 году',
  },
  {
    id: 3,
    image: img1,
    title: 'Проект WIN21',
    year: 'дом сдан в 2022 году',
  },
  {
    id: 4,
    image: img1,
    title: 'Проект WIN22',
    year: 'дом сдан в 2023 году',
  },
  {
    id: 5,
    image: img1,
    title: 'Проект WIN23',
    year: 'дом сдан в 2023 году',
  },
];

    return (
        <div className="w-full max-w-[1400px] mx-auto py-12 px-4 overflow-hidden font-sans">

            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8 tracking-wide">
                <span className="text-gray-900">Галерея </span>
                <span className="text-[#f09e54]">построенных домов</span>
            </h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2.2,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                }}
                className="pb-12" 
            >
                {builtHouses.map((house) => (
                    <SwiperSlide key={house.id}>
                        {({ isActive }) => (
                            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden group">

                                <img
                                    src={house.image}
                                    alt={house.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />

                                {!isActive && (
                                    <div className="absolute inset-0 bg-white/50 transition-opacity duration-300"></div>
                                )}

                                {isActive && (
                                    <div className="absolute bottom-6 left-6 bg-white p-5 min-w-[250px] shadow-lg animate-fade-in">
                                        <h3 className="text-xl font-bold text-gray-900">{house.title}</h3>
                                        <p className="text-sm text-gray-500 italic mt-1">{house.year}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>)
})

export default Section5Villages