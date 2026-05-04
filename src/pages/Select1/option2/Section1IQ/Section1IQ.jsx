import { memo } from 'react'
import './Section1IQ.css'

const Section1IQ = memo(() => {
    return (
        <section
            className=" img1 relative top-[-100px]  bg-cover bg-center bg-no-repeat"

        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="relative h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-end pb-12 md:pb-20">

                <p className="text-white text-[16px] md:text-[20px] font-medium mb-1 md:mb-2 tracking-wide">
                    Современный таунхаус-клуб в Казани
                </p>

                <h1 className="text-[40px] sm:text-[60px] md:text-[100px] font-extrabold uppercase leading-none tracking-tight flex flex-wrap gap-x-4 gap-y-1">
                    <span className="text-[#F19B4C] drop-shadow-md">IQ</span>
                    <span className="text-white drop-shadow-md">CLUB</span>
                </h1>

            </div>
        </section>)
})

export default Section1IQ