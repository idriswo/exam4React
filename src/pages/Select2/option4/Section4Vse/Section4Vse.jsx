import  { memo } from 'react'

import img1 from '../../../../assets/images/3142198591aa88e2d75476d14bcf0111897e675e (1).jpg'
import img2 from '../../../../assets/images/6c50ee169f27a03575d71b9637769b7833a4bb27 (1).jpg'


const Section4Vse = memo(() => {
  return (

    <section className="max-w-[1200px] mx-auto px-6 py-20 font-sans bg-white">
      
      <h2 className="text-[28px] font-bold uppercase mb-12 tracking-tight">
        В НАСТОЯЩЕЕ ВРЕМЯ <span className="text-[#E29853]">ДЛЯ ПОКУПКИ</span> ДОСТУПНЫ:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex flex-col">
          <div className="mb-6 overflow-hidden">
            <img 
              src={img1} 
              alt="Таунхаус 136 м" 
              className="w-full h-[400px]  object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-[20px] font-bold uppercase mb-1">ТАУНХАУС 136 М.</h3>
              <p className="text-[18px] text-gray-900">
                Цена от <span className="font-bold">15 500 000 ₽</span>
              </p>
            </div>
            <button className="bg-[#F2A961] text-white px-8 py-3 text-[14px] font-medium shadow-sm hover:bg-[#e0964d] transition-colors">
              Идёт продажа
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-6 overflow-hidden">
            <img 
              src={img2} 
              alt="Таунхаус 134 м" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-[20px] font-bold uppercase mb-1">ТАУНХАУС 134 М.</h3>
              <p className="text-[18px] text-gray-900">
                Цена от <span className="font-bold">12 500 000 ₽</span>
              </p>
            </div>
            <button className="bg-[#F2A961] text-white px-8 py-3 text-[14px] font-medium shadow-sm hover:bg-[#e0964d] transition-colors">
              Идёт продажа
            </button>
          </div>
        </div>

      </div>
    </section>
  );
})


export default Section4Vse