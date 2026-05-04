import { FaYoutube, FaVk, FaLinkedinIn } from 'react-icons/fa';
import img1 from '../../../assets/Header.images/54a4d7a63f7c00e19b7b0170bf2827a29d17f66d.jpg'

const Section2 = () => {
  const stats = [
    { id: 1, num: "10", text: "Лет успешного опыта продаж загородной недвижимости" },
    { id: 2, num: "1051", text: "Га - площадь наших комфортных посёлков европейского класса" },
    { id: 3, num: "5063", text: "Счастливых владельцев загородных домов" },
  ];

  return (
    <section className="max-w-[1400px] xl:mt-[630px] mt-[120px] m-auto py-20 px-5  bg-white">
      
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-28">
        {stats.map((stat) => (
          <div key={stat.id} className="w-full md:w-[30%]">
            <h2 className="text-[#E29853] text-[80px] font-medium leading-none mb-4 text-center md:text-left">
              {stat.num}
            </h2>
            
            <div className="w-full h-[2px] bg-[#E29853]/50 mb-4"></div>
            <p className="text-gray-900 text-[15px] font-medium leading-snug text-center md:text-left">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-stretch gap-16">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-5 h-5 rounded-full border-[3px] border-[#E29853]"></div>
            <h3 className="text-[#E29853] text-2xl font-bold uppercase tracking-wider">
               компании
            </h3>
          </div>

          <div className="text-gray-900 text-[20px] font-bold leading-relaxed flex flex-col gap-6 mb-12 xl:w-[500px]">
            <p className="font-medium">
              Компания <span className="text-[#E29853]">Win Dom</span> основана в 2012 году.
            </p>
            <p>
              Основным направлением девелопера является строительство загородных домов и таунхаусов "под ключ".
            </p>
            <p>
              Более 11 лет Win Dom работает на строительном рынке недвижимости Казани и Республики Татарстан и как подрядная организация и, как самостоятельный застройщик.
            </p>
          </div>

          <div className="flex items-end justify-end gap-3">
            <a href="#" className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-[#E29853] hover:text-[#E29853] transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-[#E29853] hover:text-[#E29853] transition-colors">
              <FaVk size={20} />
            </a>
            <a href="#" className="w-10 h-10 border-2 border-[#E29853] flex items-center justify-center text-[#E29853] hover:bg-[#E29853] hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-[#E29853] hover:text-[#E29853] transition-colors">
              <span className="font-bold text-xl leading-none -mt-1">t</span>
            </a>
          </div>
        </div>

        <div className="w-full relative mt-12 ">
           <div className="absolute top-[-20px] -bottom-6 left-[20px] right-[25px] border border-[#E29853] z-0 hidden md:block"></div>
           
           <img 
             src={img1} 
             alt="Дом Win Dom" 
             className="relative z-10 w-full h-full object-cover shadow-lg"
           />
        </div>

      </div>
    </section>
  );
};

export default Section2;