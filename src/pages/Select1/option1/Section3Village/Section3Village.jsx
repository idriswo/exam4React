import { memo, useState } from 'react'
import img1 from '../../../../assets/images/c4f2c3a13af786ee898e9c955fdec1908d985edd.png'


const Section3Village = memo(() => {

    const markers = [
        { id: 1, top: '65%', left: '50%', title: 'КПП №1' },
        { id: 2, top: '58%', left: '73%', title: 'Второй въезд' },
        { id: 3, top: '30%', left: '53%', title: 'Детская площадка' },
        { id: 4, top: '23%', left: '50%', title: 'Зона отдыха' },
        { id: 5, top: '75%', left: '31%', title: 'Гостевая парковка' },
    ];

    const [activeMarker, setActiveMarker] = useState(null);

    return (
        <section className="max-w-[1400px] mx-auto px-6 py-20 font-sans">
            <div className='flex justify-between  items-center'>

            <h2 className="text-[40px]  mb-10">
                <span className="font-light text-black">ПЛАН</span> <span className="font-bold text-[#E29853]">ПОСЁЛКА</span>
            </h2>
            <h1 className='h-[2px] w-[700px] bg-[#E29853]'></h1>
            </div>

            <div className="relative w-full overflow-hidden shadow-2xl rounded-sm">

                <img
                    src={img1}
                    alt="План посёлка"
                    className="w-full h-auto block"
                />

                {markers.map((marker) => (
                    <div
                        key={marker.id}
                        className="absolute cursor-pointer group"
                        style={{ top: marker.top, left: marker.left }}
                        onMouseEnter={() => setActiveMarker(marker.id)}
                        onMouseLeave={() => setActiveMarker(null)}
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E29853] rounded-full border-2 border-white flex items-center justify-center text-white font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                            {marker.id}
                        </div>

                        {activeMarker === marker.id && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-white px-4 py-2 shadow-xl whitespace-nowrap z-20">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 bg-[#E29853] rounded-full flex items-center justify-center text-white text-[12px]">
                                        {marker.id}
                                    </span>
                                    <span className="text-black font-bold uppercase text-[14px]">
                                        {marker.title}
                                    </span>
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>)
})

export default Section3Village