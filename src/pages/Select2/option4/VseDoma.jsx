import { memo, useEffect, useState } from 'react'
import './VseDome.css'
import { NavLink } from 'react-router-dom';
import Section12 from '../../Home/Section12/Secrion12';
import SectionCarsd from './SectionCard/SectionCarsd';
import axios from 'axios';
import Section2 from './Section2/Section2';
import Section4Vse from './Section4Vse/Section4Vse';
import API_URL from '../../../config/api.js';
const url = `${API_URL}/projects`
const VseDoma = memo(() => {
  const [projects, setProjects] = useState([]);
  async function getProjects() {
    try {
      const response = await axios.get(url);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  useEffect(() => {
    getProjects();
  }, [])
  return (
    <>
      <div className='anm4 h-[600px] max-w-[1560px] m-auto'>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-10 font-sans flex flex-col gap-8">
        <nav className="flex items-center gap-2 text-gray-500 text-[18px] ">
          <NavLink title="Главная" to="/" className="hover:text-black transition-colors">
            Главная
          </NavLink>
          <span className="text-gray-300 text-[12px]">●</span>
          <span className="text-black">Дома</span>
        </nav>
        <h1 className="text-[32px] md:text-[40px] font-bold uppercase tracking-wide">
          НАШИ <span className="text-[#E29853] italic font-normal">ПРОЕКТЫ ДОМОВ</span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">


          <div className="flex w-full justify-center items-center gap-[20px] overflow-x-auto xl:gap-[70px] my-[35px]">
            <button className="px-6 py-3 border border-gray-100 bg-white hover:bg-gray-50 transition-all text-[14px]">
              1-х этажные
            </button>
            <button className="px-6 py-3 border border-gray-100 bg-white hover:bg-gray-50 transition-all text-[14px]">
              2-х этажные
            </button>
            <button className="px-6 py-3 border border-gray-100 bg-white hover:bg-gray-50 transition-all text-[14px]">
              Таунхаусы
            </button>

            <button className="px-6 py-3 border border-black bg-white hover:bg-gray-50 transition-all text-[14px] flex items-center gap-2">
              На карте
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z" />
                <path d="M8 2V18" />
                <path d="M16 6V22" />
              </svg>
            </button>

            <button className="px-8 py-3 bg-[#E29853] text-white hover:bg-[#d18742] transition-all text-[14px] font-medium shadow-sm">
              Все дома
            </button>
          </div>


        </div>
        <div className='w-full h-[2px] bg-[#E29853]'></div>
      </div>

      <div className='flex  items-center border-2 border-[#E29853] max-w-[1400px]  m-auto p-6 gap-[50px] flex-wrap'>
        {currentProjects.map((project) => (
          <SectionCarsd
            key={project.id}
            title={project.title}
            price={project.price}
            housearea={project.housearea}
            plotarea={project.plotarea}
            plottype={project.plottype}
            floors={project.floors}
            rooms={project.rooms}
            image={project.image}
            id={project.id}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-10">

        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-6 py-2 bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200 transition"
        >
          ← Пред.
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border transition ${currentPage === i + 1
                ? 'border-[#E29853] text-black bg-white'
                : 'border-gray-200 bg-gray-100 text-black hover:bg-gray-200'
              }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-6 py-2 bg-gray-100 text-black border border-gray-200 hover:bg-gray-200 transition"
        >
          След. →
        </button>

      </div>
      <Section2 />
      <Section4Vse />
      <Section12 />

    </>
  )
})

export default VseDoma