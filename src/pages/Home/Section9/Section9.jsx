import { memo } from 'react'
import img1 from '../../../assets/images/1ba8533cd4cda598a6569af95922d68dbac284e1.png'

const Section9 = memo(() => {
  return (
    <>
      <div className="hidden xl:block w-full xl:flex xl:flex-row flex flex-col xl:relative justify-center bg-[#ffffff] z-10 p-[24px] font-sans">
        <div className="w-full xl:max-w-[1400px] flex flex-col lg:flex-row border-[1px] border-[#d4d4d4]">

          <div className="w-full lg:w-[70%]  relative min-h-[600px] flex">
            <img
              src="/path/to/man_field.jpg"
              alt="Background"
              className="absolute inset-[0px] w-full h-full object-cover"
            />
            <div className="absolute inset-[0px] bg-gradient-to-r from-[#2b2b2b] from-[45%] via-[#2b2b2bd9] to-transparent z-[10]"></div>

            <div className="relative z-[20] p-[48px] w-full lg:w-[65%] h-full flex flex-col justify-center">
              <h1 className="text-[36px] text-white font-medium mb-[32px] leading-[1.2] m-[0px]">
                Деловая электронная<br />газета «Бизнес Online»
              </h1>
              <p className="text-[20px] text-[#d4d4d4] leading-[1.5] mb-[48px] m-[0px]">
                "По-прежнему актуально предложение застройщиков "дом по цене казанской квартиры" в 20-30 км от границ Казани. Стоимость дома в границах нашего города, конечно будет дороже, но все же имеется возможность значительно улучшить жилищные условия, обменяв квартиру на дом "
              </p>
              <button className="bg-[#eeb16d] text-white px-[32px] py-[12px] text-[16px] font-medium border-none cursor-pointer w-[max-content]">
                Читать статью
              </button>
            </div>
          </div>

          <div className="w-full h-[92%] left-[41%] lg:w-[55%] flex absolute z-0 bg-white">
            <img className='xl:h-[100%] ' src={img1} alt="" />

          </div>

        </div>
      </div>
    </>
  )
})

export default Section9