import  { memo } from 'react'

const Section2 = memo(() => {
  return (
    <>
    <section className="max-w-[1400px] mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold uppercase mb-12 tracking-wider">Ипотека</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 mb-2 block">Вид недвижимости</label>
              <select className="w-full p-3 bg-gray-50 border-none outline-none">
                <option>Все</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-500 mb-2 block">Проект</label>
              <select className="w-full p-3 bg-gray-50 border-none outline-none">
                <option>Все</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-2 block">Вид ипотеки</label>
            <select className="w-full p-3 bg-gray-50 border-none outline-none">
              <option>Все</option>
            </select>
          </div>

          {['Стоимость', 'Первоначальный взнос', 'Ежемесячный платёж'].map((label, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-500">{label}</label>
              </div>
              <input type="text" className="w-full p-3 bg-gray-50 font-bold mb-2" defaultValue="3 000 000 ₽" />
              <input type="range" className="w-full accent-[#E29853]" />
            </div>
          ))}

          <button className="w-full bg-[#E29853] text-white py-4 font-bold uppercase tracking-widest mt-4">
            Рассчитать платёж
          </button>
        </div>

   
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'АО "Альфа банк"', rate: '4,1 %', program: 'Семейная' },
            { name: 'Банк ВТБ (ПАО)', rate: '6 %', program: 'Господдержка' },
            { name: 'ПАО Сбербанк', rate: '4 %', program: 'IT специалистам', active: true },
            { name: 'ПАО "Совкомбанк"', rate: '4 %', program: 'Семейная' }
          ].map((bank, i) => (
            <div key={i} className={`p-8 border ${bank.active ? 'bg-gray-50 border-[#AAAAAA]' : 'border-[#AAAAAA]'} flex flex-col justify-between`}>
              <div>
                <h4 className="font-bold text-lg mb-6">{bank.name}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Ставка</p>
                    <p className="text-3xl font-bold">{bank.rate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">от 4 000 ₽ / мес</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs text-gray-400 uppercase">Программа</p>
                <p className="font-medium">{bank.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
})

export default Section2