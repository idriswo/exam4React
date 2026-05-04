import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../../config/api.js';
import SectionCarsd from '../option4/SectionCard/SectionCarsd';
import Section2 from '../option4/Section2/Section2';
import Section12 from '../../Home/Section12/Secrion12';

const OdnoEtazniy = memo(() => {


  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/projects`);
      const filtered = res.data.filter(item => item.floors === '1');
      setProjects(filtered);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);


  return (
    <>
      <div className="max-w-[1400px] mx-auto p-[24px] font-sans bg-white">
        <h2 className="text-[28px] uppercase mb-10">
          <span className="font-bold">1-ЭТАЖНЫЕ</span>{" "}
          <span className="italic text-[#E29853]">ПРОЕКТЫ</span>
        </h2>

        <div className="flex  items-center border-2 border-[#E29853] max-w-[1400px]  m-auto p-6 gap-[50px] flex-wrap">
          {projects.map((project) => (
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
            />
          ))}
        </div>
      </div>
      <Section2 />
      <Section12 />
    </>
  )
})

export default OdnoEtazniy