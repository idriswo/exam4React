import { memo } from 'react'
import img1 from '../../../../assets/images/c4aa92b270e3e8e2bc9f0edfa045d956e38c5c3f.jpg'
import img2 from '../../../../assets/images/c4aa92b270e3e8e2bc9f0edfa045d956e38c5c3f (1).jpg'

import icon1 from '../../../../assets/images/Иконка Школа.png'
import icon2 from '../../../../assets/images/Иконка автобус.png'
import icon3 from '../../../../assets/images/Иконка ТЦ.png'
import icon4 from '../../../../assets/images/map_e04bf38tc7sp 1.png'

const Secction2IQ = memo(() => {
    return (
        <div className="max-w-[1400px] mx-auto px-6 py-20 font-sans flex flex-col lg:flex-row gap-16 items-start bg-white">

            <div className="lg:w-1/2 relative">
                <div className="absolute top-[-15px] right-[-15px] w-full h-full border border-[#E29853] z-0"></div>

                <div className="relative z-10 flex gap-4">
                    <div className="w-1/2 mt-12">
                        <img
                            src={img1}
                            className="w-full h-[400px] object-cover shadow-sm"
                            alt="Коттеджи"
                        />
                    </div>
                    <div className="w-1/2">
                        <img
                            src={img2}
                            className="w-full h-[400px] object-cover shadow-sm"
                            alt="Таунхаусы"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2">
                <h2 className="text-[#E29853] text-[22px] font-bold uppercase tracking-widest mb-6">
                    О проекте
                </h2>

                <div className="text-[17px] leading-relaxed mb-10 text-gray-800">
                    <span className="text-[#E29853] font-bold">ИЗУМРУДНЫЙ VILLAGE</span> — это коттеджный посёлок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 25 минутах от центра Казани.
                </div>

                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <img src={icon1} className="w-6 h-6" alt="Icon" />
                        </div>
                        <p className="text-[16px] text-gray-700">Рядом есть детские сады и школы</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <img src={icon2} className="w-6 h-6" alt="Icon" />
                        </div>
                        <p className="text-[16px] text-gray-700">Доступность общественного транспорта</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <img src={icon3} className="w-6 h-6" alt="Icon" />
                        </div>
                        <p className="text-[16px] text-gray-700">Большое количество магазинов и ТЦ</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gray-200 flex items-center justify-center flex-shrink-0">
                            <img src={icon4} className="w-6 h-6" alt="Icon" />
                        </div>
                        <p className="text-[16px] text-gray-700">Развитая внутренняя инфраструктура - есть всё на территории клуба</p>
                    </div>
                </div>
            </div>

        </div>)
})

export default Secction2IQ