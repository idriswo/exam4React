import { memo } from 'react'
import './Section1.css'

const Section1 = memo(() => {

    return (
        <>

            <section className="anm3 relative top-0 w-full h-[100vh] flex items-center justify-center text-center text-white ">
                <div className="relative z-10 max-w-4xl px-4">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                        ИПОТЕКА ОТ <span className="bg-white text-[#E29853] px-4 py-1">4%</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-light mb-10 opacity-90">
                        Уникальные ипотечные программы на специальных условиях. <br />
                        Всего шаг — до дома вашей мечты!
                    </p>
                    <button className="bg-[#E29853] hover:bg-[#cf8641] text-white px-10 py-4 text-lg transition shadow-xl">
                        Рассчитать платёж
                    </button>
                </div>
            </section>

        </>
    )
})

export default Section1