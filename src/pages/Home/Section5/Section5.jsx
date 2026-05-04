import { memo, useState } from 'react'


import img1 from '../../../assets/Header.images/3006dd1157cae4cd54661cd69391983550d9cebe.jpg'
import img2 from '../../../assets/Header.images/6c50ee169f27a03575d71b9637769b7833a4bb27.jpg'
import img3 from '../../../assets/Header.images/3142198591aa88e2d75476d14bcf0111897e675e.jpg'
import img4 from '../../../assets/Header.images/454aba1b0c4c7a706d37f20cdabc6d8e7f5ddb80.jpg'

const Section5 = memo(() => {
    const filters = ["1 этажные", "2-х этажные", "Таунхаусы", "На карте", "Все дома"];
    const [activeFilter, setActiveFilter] = useState("Все дома");

    const projectsData = [
        {
            id: 1,
            title: "Изумрудный Village",
            location: "8 минут от метро Дубравная",
            status: "Дома сдаются",
            image: img1,
        },
        {
            id: 2,
            title: "IQ CLUB",
            location: "Начало строительства",
            status: "I квартал 2024 года",
            image: img2,
        },
        {
            id: 3,
            title: "Дома в Зимней Горке",
            location: "10 минут от Казанского аэропорта",
            status: "Все дома сданы",
            image: img3,
        },
        {
            id: 4,
            title: "Усады Village",
            location: "Посёлок в черте города",
            status: "Все дома сданы",
            image: img4,
        },
    ];


    return (
        <section className="max-w-[1400px] m-auto py-10 md:py-20 px-4 md:px-10 font-sans bg-white">

            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-10">
                Наши <span className="text-[#E29853] font-light">Проекты</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-[40px] mb-8 overflow-x-auto pb-2 no-scrollbar">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-6 py-2 border text-sm transition-all whitespace-nowrap ${activeFilter === f
                            ? "bg-[#E29853] text-white border-[#E29853]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#E29853]"
                            }`}
                    >
                        {f === "На карте" ? <span>{f} 🗺️</span> : f}
                    </button>
                ))}
            </div>

            <div className="border-b border-[#E29853]/20 pb-4 mb-10 flex items-center gap-2">
                <span className="font-bold text-gray-900 text-[23px]">Коттеджные поселки и дома</span>
                <span className="text-gray-500 text-[23px]">в Казани</span>
                <span className="text-[#E29853] cursor-pointer">▼</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                {projectsData.map((project) => (
                    <div key={project.id} className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-[30px]">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                                <div className='flex items-center gap-[15px]'>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="text-[#E29853]">📍</span>
                                        {project.location}
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[#E29853] text-sm font-medium">{project.status}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <button className="px-12 py-3 border border-gray-300 text-gray-700 hover:bg-[#E29853] hover:text-white hover:border-[#E29853] transition-all uppercase text-sm tracking-widest font-medium">
                    Смотреть всё
                </button>
            </div>

        </section>

    )
})

export default Section5