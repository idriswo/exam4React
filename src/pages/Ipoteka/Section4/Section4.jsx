import { memo, useState } from 'react'

const Section4 = memo(() => {

    const faqItems = [
        {
            id: 1,
            question: 'Можно ли использовать материнский капитал для первоначального взноса?',
            answer: [
                'Да, возможно. Если средств материнского капитала не хватает для первоначального взноса, то вы можете добавить собственные средства.',
                'После рассмотрения пакета документов банк рассчитывает сумму кредита, который он может выдать на данных условиях. После этого возможны два варианта:',
                '— увеличение максимальной суммы кредита на величину материнского капитала с автоматическим уменьшением первоначального взноса;',
                '— использование материнского капитала для первоначального взноса без увеличения суммы кредита.',
            ],
        },
        {
            id: 2,
            question: 'Нужно ли привозить бумажные документы или все можно отправить электронно?',
            answer: [
                'Для подачи заявки на ипотеку достаточно сканов или фото всех документов. Анкету на кредит также можно подписать дистанционно.',
            ],
        },
        {
            id: 3,
            question: 'Есть ли требование к гражданству?',
            answer: [
                'По стандартным программам требования к гражданству нет. Ипотека с Господдержкой и Семейная ипотека распространяется только на граждан РФ.',
            ],
        },
        {
            id: 4,
            question: 'Я работаю неофициально. У меня есть шанс получить ипотеку?',
            answer: [
                'Да, ипотеку получить возможно. Практические все наши банки-партнеры могут рассмотреть заявку на ипотечный кредит по двум документам, без предоставления документов о трудоустройстве. Для этого необходимо заполнить анкету, паспорт и СНИЛС.',
            ],
        },
    ];

    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="bg-white min-h-[100vh] p-[24px]">
            <div className="max-w-[1350px] m-[0_auto]">
                <header className="flex justify-between items-center mb-[48px]">
                    <h1 className="xl:text-[50px] text-[20px] font-bold">
                        <span className="text-black">ОТВЕТЫ НА</span>
                        <span className="text-[#fca34d] ml-[10px]">ВОПРОСЫ</span>
                    </h1>
                    <button className="bg-[#fca34d] text-white px-[32px] py-[16px] rounded-[10px] xl:text-[18px] text-[14px] font-medium border-none cursor-pointer">
                        Перезвоните мне
                    </button>
                </header>

                <div className=" my-[40px] flex flex-col gap-[30px]">
                    {faqItems.map((item) => (
                        <div key={item.id} className="bg-[#f5f5f5] rounded-[16px] p-[32px]">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <h2 className="text-[25px] font-bold text-black max-w-[80%]">{item.question}</h2>
                                <div className="bg-white rounded-[50%] p-[16px] flex justify-center items-center">
                                    <svg
                                        width="22"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`transition-transform duration-[300ms] ${openId === item.id ? 'rotate-[180deg]' : 'rotate-[0deg]'}`}
                                    >
                                        <path d="M18 15L12 9L6 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-[300ms] ease-in-out ${openId === item.id ? 'max-h-[1000px] mt-[24px] opacity-[1]' : 'max-h-[0px] mt-[0px] opacity-[0]'}`}
                            >
                                <div className="text-[18px] text-black flex flex-col gap-[16px] leading-[1.6]">
                                    {item.answer.map((paragraph, index) => (
                                        <p key={index} >{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Section4