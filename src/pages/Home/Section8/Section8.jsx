import { memo } from 'react'

import img1 from '../../../assets/Header.images/Rectangle 92.png'
import img2 from '../../../assets/Header.images/Rectangle 93.png'
import img3 from '../../../assets/Header.images/Rectangle 94 (1).png'
import img4 from '../../../assets/Header.images/Rectangle 94 (2).png'

const Section8 = memo(() => {

    const teamMembers = [
        {
            id: 1,
            name: "Игорь Захаров",
            role: "Руководитель проекта",
            image: img1,
        },
        {
            id: 2,
            name: "Луиза Назипова",
            role: "Главный архитектор",
            image: img2,
        },
        {
            id: 3,
            name: "Мухарямов Расул",
            role: "Заместитель руководителя проекта",
            image: img3,
        },
        {
            id: 4,
            name: "Ваганов Дмитрий",
            role: "Заместитель руководителя проекта",
            image: img4,
        },
    ];

    return (
        <>
            <section className="max-w-[1400px] mx-auto py-12 md:py-20 px-4 md:px-10 font-sans bg-white">

                <div className="flex justify-between items-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900">
                        Наша <span className="text-[#E29853] font-light italic">Команда</span>
                    </h2>
                    <div className="hidden md:block">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10H38M38 10L30 2M38 10L30 18" stroke="#E29853" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16 text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                    <p>
                        Сотрудники WinDom - это профессионалы, сочетающие в себе энтузиазм и опыт, энергичные, творческие и увлеченные люди.
                    </p>
                    <p>
                        Наша команда состоит из молодых профессионалов, готовых преодолевать сложности любого уровня. Успех отдельно взятого сотрудника - это составляющая часть успеха всей компании.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center group">
                            <div className="w-full aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="text-center px-2">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-sm text-gray-600 leading-tight min-h-[40px]">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

        </>
    )
})

export default Section8