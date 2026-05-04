import { memo } from 'react'
import img1 from '../../../../assets/images/7f95486336724dd82efd72cfe26b62a316413d86.png'

const Section4Village = memo(() => {
    return (
        <section className="max-w-[1400px] mx-auto px-6 py-20 font-sans bg-white">

            <h2 className="text-[32px] font-bold uppercase mb-10 tracking-tight">
                ТРАНСПОРТНАЯ <span className="font-light text-[#E29853]">ДОСТУПНОСТЬ</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                <p className="text-[16px] leading-relaxed text-gray-800">
                    <span className="text-[#E29853] font-bold">ИЗУМРУДНЫЙ VILLAGE</span> расположен в Приволжском районе Казани, по соседству с жилым комплексом Изумрудный. Рядом с поселком есть все для комфортной жизни.
                </p>
                <p className="text-[16px] leading-relaxed text-gray-800">
                    Хорошая транспортная и пешеходная доступность, социальная и инженерная инфраструктура: детские сады, школы, административные учреждения.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center border-b border-gray-100 pb-12">
                <div>
                    <div className="text-[#E29853] text-[80px] font-medium leading-none mb-4">3 мин</div>
                    <p className="text-[18px] font-bold text-black uppercase">до автобусной остановки</p>
                </div>
                <div>
                    <div className="text-[#E29853] text-[80px] font-medium leading-none mb-4">5 мин</div>
                    <p className="text-[18px] font-bold text-black uppercase">до детского сада и школы</p>
                </div>
                <div>
                    <div className="text-[#E29853] text-[80px] font-medium leading-none mb-4">8 мин</div>
                    <p className="text-[18px] font-bold text-black uppercase">до лесопарка Дубрава</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                <div className="border border-[#E8CBB0] p-6 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 bg-[#E29853] rounded-full text-white text-[12px] flex items-center justify-center font-bold">1</span>
                        <span className="font-bold uppercase text-[15px]">ТЦ Южный</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                        <span>🚗</span> 26 минут
                    </div>
                </div>

                <div className="border border-[#E8CBB0] p-6 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 bg-[#E29853] rounded-full text-white text-[12px] flex items-center justify-center font-bold">2</span>
                        <span className="font-bold uppercase text-[15px]">ТЦ Мега</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                        <span>🚗</span> 28 минут
                    </div>
                </div>

                <div className="border border-[#E8CBB0] p-6 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 bg-[#E29853] rounded-full text-white text-[12px] flex items-center justify-center font-bold">3</span>
                        <span className="font-bold uppercase text-[15px]">ТЦ Кольцо</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                        <span>🚗</span> 32 минут
                    </div>
                </div>

                <div className="border border-[#E8CBB0] p-6 flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-6 h-6 bg-[#E29853] rounded-full text-white text-[12px] flex items-center justify-center font-bold">4</span>
                        <span className="font-bold uppercase text-[15px]">ТЦ Парк Хаус</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[14px]">
                        <span>🚗</span> 45 минут
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[500px] border border-gray-200">
                <img
                    src={img1}
                    alt="Карта проезда"
                    className="w-full h-full object-cover grayscale-[0.5]"
                />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <button className="bg-white border border-gray-300 px-10 py-3 uppercase font-bold text-[14px] hover:bg-gray-50 transition-colors shadow-lg">
                        Построить маршрут
                    </button>
                </div>
            </div>

        </section>)
})

export default Section4Village