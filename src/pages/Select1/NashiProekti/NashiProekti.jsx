import { memo } from 'react'
import Section2 from '../../Select2/option4/Section2/Section2'
import Section12 from '../../Home/Section12/Secrion12'
import img1 from '../../../assets/images/8b105cd425cb5fff26e2cea88f3dc2d839047b2c.jpg'
import img2 from '../../../assets/images/6c50ee169f27a03575d71b9637769b7833a4bb27 (1).jpg'

import img3 from '../../../assets/images/f49bdf8b4c969216e2fd92686258c37d8db4a4d0.jpg'
import img4 from '../../../assets/images/3142198591aa88e2d75476d14bcf0111897e675e (2).jpg'
import img5 from '../../../assets/images/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80 (1).jpg'

const NashiProekti = memo(() => {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-6 py-20 font-sans bg-white">

        <div className="relative mb-10 group cursor-pointer">
          <div className="overflow-hidden">
            <img
              src={img1}
              alt="Изумрудный Village"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-[24px] font-bold uppercase">
                <span className="text-[#E29853]">ИЗУМРУДНЫЙ</span> VILLAGE
              </h3>
              <div className="flex gap-4 text-[13px] text-gray-500 mt-2">
                <span>📍 8 минут от метро Дубравная</span>
                <span className="text-[#E29853]">Дома сдаются</span>
              </div>
            </div>
            <p className="max-w-[400px] text-[13px] text-gray-600 mt-4 md:mt-0 leading-tight">
              Коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.
            </p>
          </div>
        </div>

        <div className="relative mb-16 group cursor-pointer">
          <div className="overflow-hidden">
            <img
              src={img2}
              alt="IQ CLUB"
              className="w-full h-[450px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-[24px] font-bold uppercase">
                <span className="text-[#E29853]">IQ</span> CLUB
              </h3>
              <div className="flex gap-4 text-[13px] text-gray-500 mt-2">
                <span>📍 Начало строительства</span>
                <span className="text-gray-400">I квартал 2024 года</span>
              </div>
            </div>
            <p className="max-w-[400px] text-[13px] text-gray-600 mt-4 md:mt-0 leading-tight">
              Таунхаус-клуб IQ CLUB - это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img src={img3} alt="Зимняя горка" className="w-full h-[250px] object-cover hover:scale-110 transition-duration-500" />
            </div>
            <div className="bg-white p-4 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold uppercase text-[15px]">Зимняя горка</h4>
                <span className="text-[11px] text-[#E29853]">Все дома сданы</span>
              </div>
              <p className="text-[12px] text-gray-500">📍 10 минут от Казанского аэропорта</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img src={img4} alt="Усады Village" className="w-full h-[250px] object-cover hover:scale-110 transition-duration-500" />
            </div>
            <div className="bg-white p-4 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold uppercase text-[15px]">Усады Village</h4>
                <span className="text-[11px] text-[#E29853]">Все дома сданы</span>
              </div>
              <p className="text-[12px] text-gray-500">📍 Поселок в черте города</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img src={img5} alt="Константиновка" className="w-full h-[250px] object-cover hover:scale-110 transition-duration-500" />
            </div>
            <div className="bg-white p-4 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold uppercase text-[15px]">Константиновка</h4>
                <span className="text-[11px] text-[#E29853]">Все дома сданы</span>
              </div>
              <p className="text-[12px] text-gray-500">📍 Поселок в черте города</p>
            </div>
          </div>

        </div>
      </section>
      <Section2 />
      <Section12 />
    </>
  )
})

export default NashiProekti