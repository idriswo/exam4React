import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Section10 = () => {
  const reviews = [
    {
      id: 1,
      image: "/images/maxim.jpg",
      name: "Максим Иванов",
      desc: "Приобрел дом 150кв м",
      text: "Заказывал в этой компании постройку загородного дома, но у же по готовой планировке. Могу сказать что в этой компании очень опытные инженеры и профессиональные строители. Сделали все качественно и как было задумано изначально, были не большие изменения в планировке, но они их изначально согласовали со мной а потом уже делали."
    },
    {
      id: 2,
      image: "/images/petrovy.jpg",
      name: "Семья Петровых",
      desc: "Приобрели двухэтажный дом 300кв м",
      text: "Мы в восторге от нашего нового дома! Мы долго выбирали квартиру в городе, но когда решили завести второго ребенка поняли, что в квартире нам всем будет тесно. Дом выбирали вместе с родителями - папа особенно оценил изоляцию стен....."
    },
    {
      id: 3,
      image: "/images/muratovy.jpg",
      name: "Семья Муратовых",
      desc: "Приобрели двухэтажный дом 240кв м",
      text: "Поскольку семья у нас из 4-х человек, то дом мы себе смотрели сразу просторный и под ключ. В этом плане мне понравилось, что в данном проекте просторные комнаты и у каждого есть свое личное пространство."
    },
    {
      id: 3,
      image: "/images/muratovy.jpg",
      name: "Семья Муратовых",
      desc: "Приобрели двухэтажный дом 240кв м",
      text: "Поскольку семья у нас из 4-х человек, то дом мы себе смотрели сразу просторный и под ключ. В этом плане мне понравилось, что в данном проекте просторные комнаты и у каждого есть свое личное пространство."
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-10">
      <h2 className="text-3xl font-light mb-10 tracking-wide">
        <span className="text-[#E29853] uppercase font-semibold">ОТЗЫВЫ</span> КЛИЕНТОВ
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-[#E29853] p-8 h-full bg-white flex flex-col min-h-[350px]">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-6 flex-grow">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section10;