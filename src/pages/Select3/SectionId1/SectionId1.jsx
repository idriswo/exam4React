import { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SectionId1 = memo(() => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/articles1/${id}`)
            .then(res => setArticle(res.data))
            .catch(err => console.error("Хатогӣ ҳангоми боргирӣ:", err));
    }, [id]);

    if (!article) return <div className="p-10 text-center">Загрузка...</div>;

    return (
        <div className="max-w-[800px] mx-auto bg-white p-[20px] md:p-[40px] font-sans text-[#1a1a1a]">
            <button onClick={() => navigate(-1)} className="mb-6 text-gray-400 hover:text-black transition-colors">
                ← Назад
            </button>
            
            <h1 className="text-[28px] md:text-[32px] font-bold mb-6 leading-tight">{article.title}</h1>
            <p className="text-[16px] leading-[1.6] mb-8">{article.intro}</p>
            
            <img src={article.image} alt="News" className="w-full h-auto mb-10 rounded-sm" />

            <div className="space-y-8 mb-12">
                {article.points?.map((item, index) => (
                    <div key={index} className="text-[16px] leading-[1.6]">
                        <p>
                            <span className="font-bold">{item.num}. {item.bold}</span>
                            <br />
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {article.footer_text && (
                <div className="border-t pt-8 text-[16px] leading-[1.6] text-gray-700">
                    <p className="font-medium">{article.footer_text}</p>
                </div>
            )}
        </div>
    );
});

export default SectionId1;