import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SectionDetails = memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [mainImg, setMainImg] = useState("");

  const getProject = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/projects/${id}`);

      setProject(res.data);

      if (res.data.images && res.data.images.length > 0) {
        setMainImg(res.data.images[0]);
      } else if (res.data.image) {
        setMainImg(res.data.image);
      }
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  useEffect(() => {
    getProject();
  }, [id]);

  if (!project) {
    return (
      <div className="p-10 text-center font-sans">
        Загрузка...
      </div>
    );
  }

  const CheckIcon = () => (
    <svg className="w-4 h-4 text-black mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4 font-sans text-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-gray-500 hover:text-black"
        >
          ← Назад
        </button>

        <div className="bg-white p-6 md:p-8 flex flex-col lg:flex-row gap-10 mb-8 shadow-sm">

          <div className="lg:w-3/5 flex flex-col gap-4">
            <div className="w-full h-[400px] bg-gray-100">
              <img
                src={mainImg}
                alt="main"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {project.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImg(img)}
                  className={`w-[100px] h-[70px] object-cover cursor-pointer border-2 ${
                    mainImg === img
                      ? 'border-[#E29853]'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className="lg:w-2/5 flex flex-col">
            <h1 className="text-[26px] font-bold mb-6">
              {project.title}
            </h1>

            <div className="space-y-3 mb-8 text-[15px]">
              <p>🏠 Площадь дома — {project.housearea}</p>
              <p>📐 Площадь участка — {project.plotarea}</p>
              <p>📄 Тип участка — {project.plottype}</p>
              <p>🏢 Этажи — {project.floors}</p>
              <p>🚪 Комнаты — {project.rooms}</p>
            </div>

            <div className="mt-auto">
              <p className="text-[18px] font-bold mb-4">
                Цена: <span className="text-[#E29853]">{project.price}</span>
              </p>

              <button className="w-full py-3 bg-[#E29853] text-white">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-sm">
          <h2 className="text-[20px] font-bold mb-6">Характеристики</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features?.rooms?.map((item, i) => (
              <div key={i} className="flex items-start">
                <CheckIcon /> {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

export default SectionDetails;