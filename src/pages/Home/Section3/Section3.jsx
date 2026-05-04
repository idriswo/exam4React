import  { memo } from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import img1 from '../../../assets/Header.images/0b8a3bc9bbc630fde9c4a2803094f2c689da5c46.jpg'
import img2 from '../../../assets/Header.images/20738cdccdc4420dacab1556bdd4af8b3fad4b68 (1).jpg'

const Section3 = memo(() => {
    return (
        <>

            <section className="max-w-[1400px] m-auto py-10 md:py-20 px-4 md:px-10 font-sans bg-white relative overflow-hidden">

                <div className="relative mb-10 md:mb-16">
                    <div className="flex items-center gap-3">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-tighter text-gray-900 whitespace-nowrap">
                            Уникальная <span className="text-[#E29853] font-light">Архитектура</span>
                        </h2>
                        <div className="hidden md:block flex-grow h-[1px] bg-[#E29853]/30 ml-10 relative">
                            <div className="absolute right-0 top-0 w-[1px] h-20 bg-[#E29853]/30"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 md:gap-10">

                    <div className="relative border border-[#E29853]/20 p-1 md:p-2">
                        <div className="absolute -top-[-100px] -right-[40px] md:-top-4 md:-right-4 w-20 h-20 md:w-40 md:h-40 border-t border-r border-[#E29853]"></div>
                        <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-40 md:h-40 border-b border-l border-[#E29853]"></div>

                        <div className="relative z-10 w-full overflow-hidden shadow-xl rounded-sm">
                            <ReactCompareSlider
                                itemOne={<ReactCompareSliderImage src={img1} alt="Day View" />}
                                itemTwo={<ReactCompareSliderImage src={img2} alt="Night View" />}
                                className="w-full h-[300px] md:h-[600px]"
                            />
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <div className="w-full md:max-w-[700px] border-l-2 border-[#E29853] pl-4 md:pl-8 py-1 md:py-2">
                            <p className="text-gray-900 text-sm md:text-xl leading-relaxed font-medium">
                                Мы не строим однотипных коробочных решений: дома из желтого
                                или красного кирпича. Мы создаём <span className="text-[#E29853]">уникальные</span>,
                                ни на что не похожие, <span className="text-[#E29853]">запоминающиеся проекты</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
})

export default Section3