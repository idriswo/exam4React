import {  memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
const Section6Village = memo(() => {
    return (
        <div className="max-w-[1300px] mx-auto py-10 px-4">

            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold uppercase">
                    <span className="text-[#f09e54]">Популярные</span> <span>проекты</span>
                </h2>

                <div className="flex gap-2">
                    <button className="prev-el w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#f09e54] hover:text-white transition-all">
                        <span className="text-xl">❮</span>
                    </button>
                    <button className="next-el w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#f09e54] hover:text-white transition-all">
                        <span className="text-xl">❯</span>
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    prevEl: '.prev-el',
                    nextEl: '.next-el',
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} !w-10 !h-1 !rounded-none !bg-gray-300"></span>`;
                    },
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="relative"
            >
                {[1, 2, 3, 4].map((item) => (
                    <SwiperSlide key={item}>
                        <div className="flex flex-col">
                            <div className="h-[450px] w-full bg-gray-200 overflow-hidden">
                                <img
                                    src={`https://picsum.photos/400/500?random=${item}`}
                                    className="w-full h-full object-cover"
                                    alt="house"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-lg">Проект WIN{item}</h3>
                                <p className="text-gray-500 italic">Визуализация</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Стили Pagination мустақиман дар классҳо (бе файл) */}
                <div className="mt-10 flex justify-center [&_.swiper-pagination-bullet-active]:!bg-[#f09e54]"></div>
            </Swiper>

            <style dangerouslySetInnerHTML={{
                __html: `
        .swiper-pagination { position: relative !important; margin-top: 20px; }
        .swiper-pagination-bullet { width: 40px !important; height: 4px !important; border-radius: 0 !important; }
      ` }} />
        </div>)
})

export default Section6Village