import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Novosti = memo(() => {
  const [articles, setArticles] = useState([]);
  const [years] = useState([2017, 2018, 2019, 2020, 2021, 2022, 2023]);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [loading, setLoading] = useState(false);

  const getArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/articles1`);
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);


  const filteredArticles = articles.filter(
    (item) => item.year === selectedYear
  );

  const handleYear = (year) => {
    setSelectedYear(year);
  };
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-[24px] font-sans">
        <h1 className="text-[40px] font-bold mb-8 uppercase tracking-wider">
          Новости
        </h1>

        <div className="flex justify-center xl:gap-[40px] mb-12">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYear(year)}
              className={`px-6 py-2 border text-[14px] transition-all duration-300 rounded-md ${year === selectedYear
                ? 'bg-[#E29853] text-white border-[#E29853] scale-110'
                : 'bg-white text-black border-gray-200 hover:scale-105'
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="flex flex-col md:flex-row border border-gray-100 bg-white overflow-hidden hover:shadow-sm transition-shadow"
            >
              <div className="md:w-[400px] h-[250px]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-8 flex flex-col">
                <h2 className="text-[22px] font-bold text-black mb-3 leading-tight">
                  {art.title}
                </h2>

                <div className="flex items-center gap-2 text-gray-400 text-[14px] mb-4">
                  <span>🕒</span>
                  <span>{art.date}</span>
                </div>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                  {art.description}
                </p>

                <Link
                  to={`/Novosti/${art.id}`}
                  className="text-[#E29853] font-medium hover:underline flex items-center gap-1"
                >
                  Читать далее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Novosti;