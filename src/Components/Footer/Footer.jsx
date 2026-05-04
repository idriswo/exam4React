import  { memo } from 'react'
import img1 from '../../assets/Header.images/windom logo 3.png'
const Footer = memo(() => {
  return (
    <>

   <footer className="max-w-[1560px] m-auto bg-[#333333] text-white py-10 md:py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center md:items-start text-center md:text-left">
          
          <div className="hidden md:block">
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider relative inline-block">
              О компании
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#E29853]"></span>
            </h4>
            <ul className="mt-8 space-y-3 text-gray-300 font-light">
              <li>Главная</li>
              <li>Наша команда</li>
              <li>СМИ о нас</li>
              <li>Отзывы</li>
              <li>Новости</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider relative inline-block">
              Проекты
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#E29853]"></span>
            </h4>
            <ul className="mt-8 space-y-3 text-gray-300 font-light">
              <li>Изумрудный Village</li>
              <li>IQ-CLUB</li>
              <li>Все проекты</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xl font-bold mb-4 uppercase tracking-wider relative inline-block">
              Ипотека
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#E29853]"></span>
            </h4>
            <ul className="mt-8 space-y-3 text-gray-300 font-light">
              <li>Ипотечные кредиты</li>
              <li>Для семей с детьми</li>
              <li>Военная ипотека</li>
              <li>Господдержка 2023</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end w-full order-first md:order-last">
            <div className="mb-6 text-center md:text-right">
              <img src={img1} alt="WINDOM" className="w-40 md:w-48 mb-2 mx-auto md:mr-0" />
             
            </div>

            <div className="flex gap-3 mb-8">
              {[
                { n: 'Y', c: 'white' },
                { n: 'VK', c: 'white' },
                { n: 'in', c: '#E29853' },
                { n: 't', c: 'white' }
              ].map((icon, i) => (
                <p key={i}  className="w-12 h-12 md:w-10 md:h-10 border border-gray-400 flex items-center justify-center hover:border-[#E29853] transition">
                  <span className="font-bold text-lg" style={{ color: icon.c }}>{icon.n}</span>
                </p>
              ))}
            </div>

            <div className="border border-white md:border-gray-500 p-4 md:p-3 flex items-center justify-center gap-3 w-full max-w-[350px] md:max-w-[280px]">
              <svg className="w-6 h-6 md:w-5 md:h-5 text-white md:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-base md:text-xs text-white md:text-gray-300 font-light">
                windom.kazan@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="mt-[20px] pt-8 border-t border-gray-700 md:border-none text-center md:text-left">
          <p className="text-sm md:text-xs text-gray-400 cursor-pointer hover:text-white transition">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>

    </>
  )
})

export default Footer