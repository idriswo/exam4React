import  { memo } from 'react'
import './Section1.css'
import { FaPlay } from 'react-icons/fa';


const Section1 = memo(() => {
  return (
    <>



    <section 
      className="anm1  xl:absolute top-0 z-0"
    >

      <div className="relative z-10 max-w-[1350px] mt-[90px] w-full mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between md:items-end gap-10 pb-20 pt-32">
        
        <div className="flex flex-col max-w-[800px]">
          <h2 className="text-white text-2xl md:text-[32px] tracking-wider mb-0 font-light">
            СТРОИТЕЛЬНАЯ КОМПАНИЯ
          </h2>
          
          <h1 className="text-[#E29853] text-[120px] md:text-[180px] font-black leading-none uppercase mb-6">
            Win
          </h1>
          
          <p className="text-white text-lg md:text-2xl mb-12 max-w-[500px] leading-snug">
            Мы строим дома, коттеджные поселки и таунхаусы в Казани
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button className="bg-[#E29853] hover:bg-[#c98344] text-white px-8 py-4 font-medium transition-all text-sm md:text-base">
              Подробнее о проектах
            </button>
            <button className="bg-[#2A2A2A]/60 border border-gray-400/50 hover:border-white text-white px-8 py-4 font-medium backdrop-blur-sm transition-all text-sm md:text-base">
              Задать вопрос
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 cursor-pointer group mb-4">
          <div className="relative flex items-center justify-center w-[110px] h-[110px] rounded-full bg-[#E29853]/40 border border-[#E29853]/20 group-hover:bg-[#E29853]/60 transition-all backdrop-blur-sm">
            <FaPlay className="text-white text-2xl ml-2" />
          </div>
          <span className="text-white font-bold text-sm tracking-widest uppercase group-hover:text-[#E29853] transition-colors">
            Смотреть видео
          </span>
        </div>

      </div>
    </section>


    </>
  )
})

export default Section1