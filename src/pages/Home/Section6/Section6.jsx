import  { memo } from 'react'
import './Section6.css'
const Section6 = memo(() => {
  return (
   <>
    <section 
      className="anm2 relative w-full max-w-[1400px] m-auto py-16 my-[60px] md:py-24 bg-cover bg-center" 
      
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 flex flex-col items-center">
        
        <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-wide mb-10 text-center flex flex-wrap justify-center items-center gap-3">
          <span>Скачать</span>
          <span className="text-[#E29853]   px-3 py-1">
            Каталог
          </span>
          <span>наших проектов</span>
        </h2>

        <form className="w-full flex flex-col md:flex-row gap-4">
          
          <input 
            type="text" 
            placeholder="Имя" 
            className="flex-1 bg-black/40 border border-[#E29853]/70 text-white px-6 py-4 focus:outline-none focus:border-[#E29853] focus:bg-black/60 placeholder-gray-300 transition-all text-lg"
            required
          />

          <input 
            type="email" 
            placeholder="Ваш E-mail" 
            className="flex-1 bg-black/40 border border-[#E29853]/70 text-white px-6 py-4 focus:outline-none focus:border-[#E29853] focus:bg-black/60 placeholder-gray-300 transition-all text-lg"
            required
          />

          <button 
            type="submit" 
            className="w-full md:w-[250px] bg-[#E29853] text-white px-8 py-4 text-lg font-medium hover:bg-[#d18745] transition-colors uppercase"
          >
            Скачать
          </button>
          
        </form>

      </div>
    </section>

   </>
  )
})

export default Section6