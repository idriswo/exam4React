import  { memo,useState } from 'react'

import imgFloor1 from '../../../../assets/images/db5f3276b63bf6c1898440fe110abd081d7fd747.jpg'
import imgFloor2 from '../../../../assets/images/Rectangle 196.png'


const Section8Village = memo(() => {

    const [activeFloor, setActiveFloor] = useState(1);

  const floorData = {
    1: {
      title: "Первый этаж",
      size: "75 м2",
      image: imgFloor1 
    },
    2: {
      title: "Второй этаж",
      size: "75 м2",
      image: imgFloor2 
    }
  };

  const features = [
    "Гостиная",
    "2 спальных комнаты",
    "3 ванные комнаты",
    "1 комната свободной планировки",
    "Детская комната"
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-16 px-4 font-sans flex flex-col lg:flex-row gap-12">
      
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-8">
          Планировки <span className="text-[#f09e54]">таунхаусов</span>
        </h2>

        <div className="text-gray-700 space-y-6 text-lg mb-10">
          <p>
            Таунхаусы в коттеджном поселке Изумрудный Village представлены в двух вариантах планировки.
          </p>
          <p>
            В настоящий момент для продажи доступны площадью в 150 м2.
          </p>
        </div>

        <h3 className="font-bold uppercase mb-6 tracking-wide text-gray-900">
          Каждый таунхаус включает в себя:
        </h3>

        <ul className="space-y-4 mb-12">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-[#f09e54] text-xl">✓</span>
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button 
            onClick={() => setActiveFloor(1)}
            className={`flex-1 py-4 px-6 border transition-all duration-300 text-center ${
              activeFloor === 1 
              ? 'bg-transparent border-[#f5dbbf] text-black shadow-sm' 
              : 'bg-transparent border-gray-200 text-gray-400 opacity-60'
            }`}
          >
            <div className="font-bold">Первый этаж</div>
            <div className="text-sm">75 м2</div>
          </button>

          <button 
            onClick={() => setActiveFloor(2)}
            className={`flex-1 py-4 px-6 transition-all duration-300 text-center ${
              activeFloor === 2 
              ? 'bg-[#f09e54] text-white' 
              : 'border border-[#f5dbbf] text-gray-500'
            }`}
          >
            <div className="font-bold">Второй этаж</div>
            <div className="text-sm">75 м2</div>
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 relative flex justify-center items-center">
        <div className="relative z-10 w-full max-w-[500px]">
          <img 
            src={floorData[activeFloor].image} 
            alt={floorData[activeFloor].title}
            className="w-full h-auto transition-opacity duration-500"
          />
        </div>
        
        <div className="absolute right-[-20px] top-10 w-full max-w-[350px] opacity-20 pointer-events-none hidden md:block">
          <img 
            src={activeFloor === 1 ? imgFloor2 : imgFloor1} 
            alt="background plan"
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  )
})

export default Section8Village