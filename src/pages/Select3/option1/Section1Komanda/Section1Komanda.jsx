import { memo } from 'react'

import img1 from '../../../../assets/images/Rectangle 125.png'
import img2 from '../../../../assets/images/Rectangle 126.png'
import img3 from '../../../../assets/images/Rectangle 135.png'

const Section1Komanda = memo(() => {
    return (
        <>
            <div className="w-full bg-white font-sans">
                <div className="max-w-[1200px] m-[0_auto]">
                    <div className="pt-[48px] pb-[24px] px-[24px]">
                        <h2 className="text-[36px] font-bold uppercase m-[0px]">
                            <span className="text-black">НАША </span>
                            <span className="text-[#eb9f55]">КОМАНДА</span>
                        </h2>
                    </div>
                </div>

                <div className="w-full bg-[#eb9f55]">
                    <div className="max-w-[1200px] m-[0_auto] py-[16px] px-[24px]">
                        <p className="text-white text-[20px] m-[0px]">
                            <span className="font-bold">WIN DOM</span> — это люди, разделяющие красоту и комфорт загородной жизни.
                        </p>
                    </div>
                </div>

                <div className="max-w-[1400px] m-[0_auto] p-[24px] xl:relative z-0">
                    <div className="xl:max-w-[1300px] xl:m-auto  border-[1px] relative z-10 border-[#f5dbbf]  ">
                        <div className='xl:max-w-[1350px] m-auto flex flex-col justify-between md:flex-row mx-[-30px]  my-[30px] bg-[white]'>

                            <div className="flex-[2] flex flex-col gap-[48px]">
                                <p className="text-[18px] text-black leading-[1.4] m-[0px] max-w-[700px]">
                                    Наши менеджеры помогут разобраться, какой дом подойдет именно вам. Подберут технологию строительства и готовый типовой проект. Или разработают индивидуальное решение по вашему запросу.
                                </p>

                                <div className="flex flex-col xl:flex-row gap-[40px]">
                                    <div className="flex gap-[20px]">
                                        <img
                                            src={img1}
                                            alt="Игорь Захаров"
                                            className="w-[180px] h-[390px] object-cover"
                                        />
                                        <div className="flex flex-col justify-end pb-[20px]">
                                            <h3 className="text-[22px] font-bold text-black uppercase m-[0px] mb-[16px] leading-[1.2]">
                                                ИГОРЬ<br />ЗАХАРОВ
                                            </h3>
                                            <div className="bg-[#eb9f55] text-white px-[16px] py-[8px]">
                                                <p className="m-[0px] text-[14px]">Руководитель<br />проекта</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-[20px]">
                                        <img
                                            src={img2}
                                            alt="Луиза Назипова"
                                            className="w-[180px] h-[390px] object-cover"
                                        />
                                        <div className="flex flex-col justify-end pb-[20px]">
                                            <h3 className="text-[22px] font-bold text-black uppercase m-[0px] mb-[16px] leading-[1.2]">
                                                ЛУИЗА<br />НАЗИПОВА
                                            </h3>
                                            <div className="bg-[#eb9f55] text-white px-[16px] py-[8px]">
                                                <p className="m-[0px] text-[14px]">Главный<br />архитектор</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" min-w-[300px]">
                                <img
                                    src={img3}
                                    alt="Дом и автомобиль"
                                    className="xl:w-[400px] h-[500px] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
})

export default Section1Komanda