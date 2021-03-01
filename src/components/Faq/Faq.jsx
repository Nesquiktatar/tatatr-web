import React from 'react';
import s from './Faq.module.css';
import FaqContent from "./FaqContent/FaqContent";

const Faq = () => {
    return (
        <div className={s.faqWrapper}>
            <FaqContent
                question='На чем написан сайт?'
                answer='React'
            />
            <FaqContent
                question='Сколько стоит доставка?'
                answer='Зависит от километража.
                                до 10км=200р
                                до 20км=300р'
            />
        </div>
    )
}

export default Faq;