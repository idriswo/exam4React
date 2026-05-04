import { memo } from 'react'

import img1 from '../../../assets/Header.images/23cb2b3f7b99cef2163422e0531eb8f850491ad3 (1).jpg' 
import img2 from '../../../assets/Header.images/25e664d4b4af2fa3d9d53e9436125a805a481e5d (1).jpg' 
import img3 from '../../../assets/Header.images/29f338966821634173ffeba3daf19b4ddce06b82.jpg' 
import img4 from '../../../assets/Header.images/acf3f475696a69410e76a293560242aac0bd5bbb (1).jpg' 

const Section3 = memo(() => {
    return (
        <>
            <div className="max-w-[1400px] mx-auto p-[24px] font-sans">
                <div className="w-full flex flex-col gap-[24px]">
                    <div className="w-full bg-[#F5F5F5]  overflow-hidden flex flex-col md:flex-row">
                        <div className="flex-1 p-[48px] flex flex-col justify-between">
                            <div>
                                <h1 className="text-[36px] font-bold text-black mb-[24px] leading-tight">ИПОТЕЧНЫЕ КРЕДИТЫ</h1>
                                <p className="text-[16px] text-black mb-[24px]">
                                    Выгодная ипотечная программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и дом — ваш. Ставка действует весь срок до 30 лет при сумме кредита до 100 млн рублей и первом взносе от 13,7%.
                                </p>
                            </div>
                            <button className="self-start px-[40px] py-[16px] border border-[#f1e8e0] rounded-[8px] bg-white text-black text-[16px] hover:border-gray-300">
                                Рассчитать платёж
                            </button>
                        </div>
                        <div className="flex-1">
                            <img src={img1} alt="Mortgage keys" className="w-full h-[400px] object-cover" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-[24px]">
                        <div className="flex-1 bg-[#F5F5F5]  overflow-hidden flex flex-col md:flex-row">
                            <div className="flex-1 p-[32px] flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[28px] font-bold text-black mb-[24px]">СЕМЕЙНАЯ ИПОТЕКА</h2>
                                    <p className="text-[16px] text-black mb-[24px]">
                                        Воспользоваться программой «Семейная ипотека» возможно до 1 июля 2024 года при рождении первого ребенка или последующих детей.
                                    </p>
                                </div>
                                <button className="self-start px-[40px] py-[16px] border border-[#f1e8e0] rounded-[8px] bg-white text-black text-[16px] hover:border-gray-300">
                                    Рассчитать платёж
                                </button>
                            </div>
                            <div className="flex-1">
                                <img src={img2}  alt="Family" className="w-full h-[500px] object-cover" />
                            </div>
                        </div>

                        <div className="flex-1 bg-[#F5F5F5]  overflow-hidden flex flex-col md:flex-row">
                            <div className="flex-1 p-[32px] flex flex-col justify-between">
                                <div>
                                    <h2 className="text-[28px] font-bold text-black mb-[24px]">ГОСПОДДЕРЖКА 2023</h2>
                                    <p className="text-[16px] text-black mb-[24px]">
                                        Ипотеку с господдержкой могут получить граждане России, у которых есть постоянная регистрация, официальная работа и стабильный доход.
                                    </p>
                                </div>
                                <button className="self-start px-[40px] py-[16px] border border-[#f1e8e0] rounded-[8px] bg-white text-black text-[16px] hover:border-gray-300">
                                    Рассчитать платёж
                                </button>
                            </div>
                            <div className="flex-1">
                                <img src={img3} alt="Girl with Flowers" className="w-full h-[500px] object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#F5F5F5]  overflow-hidden flex flex-col md:flex-row">
                        <div className="flex-1 p-[48px] flex flex-col justify-between">
                            <div>
                                <h1 className="text-[36px] font-bold text-black mb-[24px] leading-tight">ИПОТЕЧНЫЕ КРЕДИТЫ</h1>
                                <p className="text-[16px] text-black mb-[24px]">
                                    Выгодная ипотечная программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и дом — ваш. Ставка действует весь срок до 30 лет при сумме кредита до 100 млн рублей и первом взносе от 13,7%.
                                </p>
                            </div>
                            <button className="self-start px-[40px] py-[16px] border border-[#f1e8e0] rounded-[8px] bg-white text-black text-[16px] hover:border-gray-300">
                                Рассчитать платёж
                            </button>
                        </div>
                        <div className="flex-1">
                            <img src={img4} alt="Mortgage keys" className="w-full h-[400px] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})

export default Section3