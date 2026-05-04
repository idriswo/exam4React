import  { memo } from 'react'

import img1 from '../../../assets/Header.images/23cb2b3f7b99cef2163422e0531eb8f850491ad3.jpg'
import img2 from '../../../assets/Header.images/ec7fcd97a74c0057f14043c3d53fa8cbd9bfd304.jpg'
import img3 from '../../../assets/Header.images/25e664d4b4af2fa3d9d53e9436125a805a481e5d.jpg'
import img4 from '../../../assets/Header.images/acf3f475696a69410e76a293560242aac0bd5bbb.jpg'

const Section7 = memo(() => {

    const mortgages = [
    {
      id: 1,
      title: "ИПОТЕЧНЫЕ КРЕДИТЫ",
      desc: "Бесплатно подберём базовую ипотечную программу",
      rate: "от 13,7%",
      downPayment: "от 10%",
      image: img1, 
    },
    {
      id: 2,
      title: "СЕМЕЙНАЯ ИПОТЕКА",
      desc: "Используем материнский капитал в качестве первоначального взноса",
      rate: "от 4%",
      downPayment: "от 15%",
      image: img2, 
    },
    {
      id: 3,
      title: "IT СПЕЦИАЛИСТАМ",
      desc: "В рамках данной программы сотрудники IT-компаний могут построить частный дом в ипотеку по льготной ставке.",
      rate: "от 4%",
      downPayment: "от 15%",
      image: img3, 
    },
    {
      id: 4,
      title: "ГОСПОДДЕРЖКА 2023",
      desc: "Используем материнский капитал в качестве первоначального взноса",
      rate: "от 6%",
      downPayment: "от 15%",
      image: img4, 
    },
  ];

  return (
   <>
    <section className="max-w-[1400px] mx-auto py-12 md:py-20 px-4 md:px-10 font-sans bg-white">
      
      <div className="mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold uppercase text-gray-900 mb-4">
          Подберём решения <span className="text-[#E29853] font-light italic">по ипотеке</span> уже сегодня
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Выберите подходящий вариант и наши специалисты подготовят для вас актуальные предложения
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {mortgages.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col sm:flex-row border border-[#E29853]/30 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between order-2 sm:order-1">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                  {item.desc}
                </p>
                
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{item.rate}</div>
                    <div className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider">Ставка по ипотеке</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{item.downPayment}</div>
                    <div className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider">Первоначальный взнос</div>
                  </div>
                </div>
              </div>

              <button className="bg-[#E29853] text-white px-6 py-3 text-sm font-medium hover:bg-[#d18745] transition-colors uppercase self-start">
                Получить расчёт
              </button>
            </div>

            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto order-1 sm:order-2 relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        ))}
      </div>

    </section>

   </>
  )
})

export default Section7