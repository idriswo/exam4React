import { memo } from 'react'

import img1 from '../../../assets/Header.images/3f19e205cde0a73f5cc8e427720d16da5c74c9db.jpg'
import img2 from '../../../assets/Header.images/e271e441dcc4fd1333f109447e022b1386f29ac4.jpg'
import img3 from '../../../assets/Header.images/2fdef2e16e2796f310dc07944ed02f324bac5b15.jpg'
import img4 from '../../../assets/Header.images/3077466c23191e0d55dccbea0cb6d7534127b5f0.jpg'
import img5 from '../../../assets/Header.images/d1ca9df12845c22e1d87427a6b21ff480f92c8aa.jpg'



const Section11 = memo(() => {
    const news = [
  {
    id: 1,
    title: "Интерьерные решения от наших дизайнеров",
    date: "01.06.2023",
    image: img1,
    isLarge: true 
  },
  {
    id: 2,
    title: "Последние несколько предложений в коттеджном посёлке Изумрудный Village",
    date: "26.05.2023",
    image: img2
  },
  {
    id: 3,
    title: "Таун 150 м2 по цене двушки - это реально!",
    date: "21.05.2023",
    image: img3
  },
  {
    id: 4,
    title: "Карта посёлка Изумрудный Village",
    date: "12.05.2023",
    image: img4
  },
  {
    id: 5,
    title: "Открытие тенисного корта в котеджном посёлке Изумрудный Village",
    date: "02.05.2023",
    image: img5
  }
];
  return (
   <>
   <div className="max-w-[1400px] mx-auto px-4 py-12">
  <div className="flex justify-between items-end mb-8">
    <h2 className="text-3xl font-light tracking-widest uppercase">
      НОВОСТИ <span className="font-semibold">КОМПАНИИ</span>
    </h2>
    <button className="border border-gray-300 px-6 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 transition">
      Все новости 
      <span className="text-xs">→</span>
    </button>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto">
    {news.map((item) => (
      <div
        key={item.id}
        className={`relative group overflow-hidden cursor-pointer ${
          item.isLarge ? "md:col-span-2 md:row-span-1" : ""
        }`}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
          <h3 className={`font-medium mb-2 ${item.isLarge ? 'text-2xl' : 'text-lg leading-tight'}`}>
            {item.title}
          </h3>
          <p className="text-sm opacity-80">{item.date}</p>
        </div>
      </div>
    ))}
  </div>
</div>
   </>
  )
})

export default Section11