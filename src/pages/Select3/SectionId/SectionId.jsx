import { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SectionId = memo(() => {
    const { id } = useParams();
    const navigate = useNavigate(); // Хукро ба боло баровардем
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Хатогӣ ҳангоми гирифтани маълумот:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    if (!article) return <div className="text-center py-10">Мақола ёфт нашуд!</div>;

    return (
        <div className="max-w-[850px] mx-auto bg-white p-[20px] md:p-[60px] font-sans text-[#1a1a1a]">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 px-5 py-2 border border-[#e8cbb0] text-black hover:bg-[#fcf8f5] transition-all rounded-sm"
            >
                <span>←</span> Назад
            </button>

            <article className="flex flex-col">
                <p className="text-[17px] leading-[1.6] mb-10 text-justify">
                    {article.intro_text || "Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло..."}
                </p>
                <p className="text-justify">
                    {article.full_text}
                </p>
                <div className="w-full mb-12">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto object-cover rounded-sm"
                    />
                </div>

                <h1 className="text-[22px] md:text-[24px] font-bold mb-8 leading-[1.3]">
                    «{article.title}»: {article.sub_title}
                </h1>

                <div className="text-[17px] leading-[1.7] space-y-6 text-[#1a1a1a]">


                        <p className="text-justify pt-4">
                            {article.extra_content}
                        </p>

                   
                        <p className="text-[16px] pt-6 font-medium">
                            Расположение: {article.location}
                        </p>
                </div>
            </article>
        </div>
    );
});

export default SectionId;