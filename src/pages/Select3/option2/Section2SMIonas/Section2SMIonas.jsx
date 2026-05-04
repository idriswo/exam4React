import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_URL from '../../../../config/api.js';


const Section2SMIonas = memo(() => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const response = await axios.get(`${API_URL}/articles`);
            setArticles(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-[32px] p-[24px] bg-white font-sans">
            {articles.map((art) => (
                <div
                    key={art.id}
                    className="flex flex-col md:flex-row w-full max-w-[1000px] border-[1px] border-[#f2e1ce] bg-white overflow-hidden"
                >
                    <div className="flex-[1] min-h-[300px]">
                        <img
                            src={art.image}
                            alt={art.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex-[1] p-[40px] flex flex-col justify-center bg-white">
                        <h2 className="text-[24px] font-bold text-black mb-[20px] leading-[1.2]">
                            {art.title}
                        </h2>

                        <p className="text-[16px] text-[#333] leading-[1.6] mb-[32px]">
                            {art.description}
                        </p>

                        <Link
                            to={`/SMIonas/${art.id}`}
                            className="px-[24px] py-[12px] bg-white border-[1px] border-[#e8cbb0] text-black text-[14px] cursor-pointer self-start hover:bg-[#fcf8f5] transition-colors inline-block"
                        >
                            Читать статью
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
})

export default Section2SMIonas