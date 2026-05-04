import { memo } from 'react'

import img1 from '../../../../assets/images/Rectangle 125.png'
import img2 from '../../../../assets/images/Rectangle 126.png'
import img3 from '../../../../assets/images/Rectangle 135.png'

const Section3Komanda = memo(() => {
    return (
        <>
            <div className="w-full  bg-white font-sans mt-[200px]">
               

                <div className="max-w-[1400px] m-[0_auto] p-[24px]  z-0">
                    <div className="xl:max-w-[1300px] xl:m-auto  border-[1px] relative z-10 border-[#f5dbbf]  ">
                        <div className='xl:max-w-[1350px] m-auto flex flex-col xl:justify-between xl:flex xl:flex-row md:flex-row mx-[-30px]  my-[30px] bg-[white]'>



                            <div className=" min-w-[300px]">
                                <img
                                    src={img3}
                                    alt="Дом и автомобиль"
                                    className="xl:w-[400px] h-[500px] object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-[48px]">
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
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
})

export default Section3Komanda