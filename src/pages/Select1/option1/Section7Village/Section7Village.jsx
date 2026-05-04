import  { memo } from 'react'

import img1 from '../../../../assets/images/3006dd1157cae4cd54661cd69391983550d9cebe (1).jpg'
import img2 from '../../../../assets/images/af04decec3b85f014311ef14d55023ae54cc85a9 (1).jpg'


const Section7Village = memo(() => {
  return (
    <div className="max-w-[1300px] mx-auto py-16 px-4 font-sans">
      
      <h2 className="text-3xl md:text-4xl font-bold uppercase mb-12 tracking-tight">
        В настоящее время <span className="text-[#f09e54]">для покупки</span> доступны:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="flex flex-col">
          <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
            <img 
              src={img1} 
              alt="Частный дом" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h3 className="text-xl font-bold uppercase text-gray-900">Частный дом на участке</h3>
              <p className="text-lg mt-2 text-gray-800">Цена от <span className="font-bold">15 500 000 ₽</span></p>
            </div>
            <button className="bg-[#8b6e4e] text-white px-8 py-3 text-sm font-medium hover:bg-[#7a5f42] transition-colors whitespace-nowrap">
              Продажи прекращены
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden">
            <img 
              src={img2} 
              alt="Таунхаус" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <h3 className="text-xl font-bold uppercase text-gray-900">Таунхаус второй очереди</h3>
              <p className="text-lg mt-2 text-gray-800">Цена от <span className="font-bold">12 500 000 ₽</span></p>
            </div>
            <button className="bg-[#f09e54] text-white px-10 py-3 text-sm font-medium hover:bg-[#e08d3c] transition-colors whitespace-nowrap">
              Узнать подробнее
            </button>
          </div>
        </div>

      </div>
    </div>
  )
})

export default Section7Village