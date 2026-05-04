import { memo } from 'react'

const Section1 = memo(() => {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
                        Центральный офис <br />
                        продаж <span className="text-[#E29853]">WIN DOM</span>
                    </h2>

                    <p className="text-xl mb-10 text-gray-800">
                        Республика Татарстан, г. Казань ул. Яркая, д.31Б
                    </p>

                    <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10">
                        <a href="tel:+79625552525" className="flex items-center gap-3 text-lg font-medium hover:text-[#E29853] transition">
                            <span className="text-[#E29853]">📞</span> +7 (962) 555-25-25
                        </a>
                        <a href="tel:+79625917960" className="flex items-center gap-3 text-lg font-medium hover:text-[#E29853] transition">
                            <span className="text-[#E29853]">📞</span> +7 (962) 591-79-60
                        </a>
                    </div>

                    <div className="flex gap-4 mb-10">
                        {['yt', 'vk', 'in', 'wa'].map((social) => (
                            <p key={social}  className="w-10 h-10 border border-gray-400 flex items-center justify-center hover:border-[#E29853] transition text-gray-600">
                                <span className="uppercase text-xs font-bold">{social}</span>
                            </p>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-4 border border-[#E29853]/40 p-4 bg-white">
                        <span className="text-[#E29853]">✉️</span>
                        <span className="text-lg">windom.kazan@gmail.com</span>
                    </div>
                </div>

                <div className="bg-white p-10 shadow-sm border border-gray-100 max-w-lg mx-auto lg:ml-auto w-full">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-3">Консультация</h3>
                        <p className="text-gray-500 leading-snug">
                            Наш менеджер свяжется с вами <br /> в ближайшее время
                        </p>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-[#E29853] outline-none transition"
                        />
                        <input
                            type="tel"
                            placeholder="Телефон"
                            className="w-full p-4 bg-gray-50 border-none focus:ring-1 focus:ring-[#E29853] outline-none transition"
                        />
                        <button className="w-full bg-[#E29853] text-white py-4 font-bold hover:bg-[#d18742] transition shadow-lg shadow-[#E29853]/20 mt-4">
                            Получить консультацию
                        </button>
                    </form>

                    <p className="text-[10px] text-gray-400 mt-6 text-center leading-relaxed">
                        Нажимая кнопку «Получить консультацию», вы подтверждаете <br />
                        свое <span className="underline cursor-pointer">согласие на обработку персональных данных</span>
                    </p>
                </div>

            </div>
        </section>
    )
})

export default Section1