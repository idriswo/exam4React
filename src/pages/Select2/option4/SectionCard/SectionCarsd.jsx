import { memo } from 'react'

import icon1 from '../../../../assets/images/carbon_home.png'
import icon2 from '../../../../assets/images/carbon_floorplan.png'
import icon3 from '../../../../assets/images/fluent-mdl2_custom-list.png'
import icon4 from '../../../../assets/images/carbon_building.png'
import icon5 from '../../../../assets/images/bi_door-open.png'
import { NavLink } from 'react-router-dom'

const SectionCarsd = memo((props) => {
    const { title, price, housearea, plotarea, plottype, floors, rooms, image } = props
    return (
        <div className="max-w-[400px] xl:w-[400px] bg-white border border-[#f5dbbf] overflow-hidden font-sans">
            <div className="relative h-[300px]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <span className="text-xl font-bold text-[#e6a65d]">{price}</span>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="text-[#e6a65d] text-xl">
                            <img src={icon1} alt="Площадь дома" />
                        </span>
                        <p className="text-gray-700">Площадь дома - {housearea}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#e6a65d] text-xl">
                            <img src={icon2} alt="Площадь участка" />
                        </span>
                        <p className="text-gray-700">Площадь участка - {plotarea}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#e6a65d] text-xl">
                            <img src={icon3} alt="Тип участка" />
                        </span>
                        <p className="text-gray-700">Тип участка - {plottype}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#e6a65d] text-xl">
                            <img src={icon4} alt="Количество этажей" />
                        </span>
                        <p className="text-gray-700">Количество этажей - {floors}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[#e6a65d] text-xl">
                            <img src={icon5} alt="Количество комнат" />
                        </span>
                        <p className="text-gray-700">Количество комнат - {rooms}</p>
                    </div>
                </div>

                <NavLink
                    to={`/SectionDetails/${props.id}`}
                    className="px-6 py-2 border border-[#E8CBB0] text-[14px] hover:bg-[#fcf8f5] text-center inline-block"
                >
                    Детали проекта
                </NavLink>
            </div>
        </div>
    )
})

export default SectionCarsd