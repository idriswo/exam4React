import  { memo } from 'react'

const Section12 = memo(() => {
  return (
    <>

    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-light tracking-widest uppercase">
          <span className="text-[#E29853]">ОФИС</span> ПРОДАЖ
        </h2>
        <div className="h-[1px] bg-[#E29853]/30 flex-grow mt-2"></div>
      </div>

      <div className="relative w-full h-[500px] overflow-hidden border border-gray-100">
        
        <iframe 
          src="https://yandex.ru/map-widget/v1/?ll=68.749550%2C38.595900&z=17&pt=68.749550%2C38.595900,pm2rdm" 
          width="100%" 
          height="100%" 
          frameBorder="0"
          allowFullScreen={true}
          className="grayscale-[20%] contrast-[1.1]" 
        ></iframe>

        <div className="xl:block hidden absolute top-10 left-10 z-10 bg-white p-10 shadow-xl max-w-[450px]">
          <h3 className="text-2xl font-bold mb-4">Центральный офис</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Вы можете обратиться к нашим менеджерам по любому вопросу
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[#E29853] mt-1">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </span>
              <p className="text-lg font-medium">г. Казань, ул. Яркая 31 Б</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#E29853] mt-1">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </span>
              <p className="text-lg font-medium">Пн-Сб: с 9:00 до 18:00</p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#E29853] mt-1">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </span>
              <a href="tel:+79625552525" className="text-lg font-medium hover:text-[#E29853] transition">
                +7 (962) 555-25-25
              </a>
            </div>
          </div>

          <button className="mt-10 w-full bg-[#E29853] text-white py-4 font-medium hover:bg-[#d18742] transition uppercase text-sm tracking-widest">
            Проложить маршрут
          </button>
        </div>
      </div>
    </div>

    </>
  )
})

export default Section12