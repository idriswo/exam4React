import  { memo } from 'react'
import './Secion2.css'
const Section2 = memo(() => {
  return (
   <section className="relative w-full h-[450px] my-[70px] flex items-center justify-center overflow-hidden">
      <div 
        className="anm5 absolute inset-0 bg-cover bg-center bg-no-repeat"
        
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-[1000px] px-6 text-center text-white">
        <h2 className="text-[24px] md:text-[36px] font-bold uppercase leading-tight mb-6 tracking-wide">
          СПЕШИТЕ ЗАБРОНИРОВАТЬ ДОМ В <br />
          Коттеджном поселке <span className="text-[#E29853]">Изумрудный Village</span>
        </h2>

        <div className="w-full max-w-[700px] h-[1px] bg-gray-500 mx-auto mb-6"></div>

        <p className="text-[18px] md:text-[22px] font-medium mb-10">
          Количество свободных участков: <span className="text-[24px] md:text-[28px] ml-2">12</span>
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto px-10 py-4 bg-[#E29853] hover:bg-[#d18742] text-white font-bold uppercase text-[14px] transition-all">
            Связаться с менеджером
          </button>
          
          <button className="w-full md:w-auto px-10 py-4 bg-white/80 hover:bg-white text-black font-bold uppercase text-[14px] transition-all">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>
  )
})

export default Section2