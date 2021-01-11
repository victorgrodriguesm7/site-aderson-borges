import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

import './index.css';

const Topic = ({ type="Processo Seletivo"}) => {
    let [isActive, setIsActive] = useState(false);
    let topicClass = "topic " + (isActive ? "active" : "");

    function getLastNews(){
        return ([
            {
                title: "Resultados 2021",
                link: "/resultados-2021"
            },
            {
                title: "Lista de Classificados 2021",
                link: "/lista-de-classificados-2021"
            },
            {
                title: "Período de Inscrição 2021",
                link: "/periodo-de-inscrição-2021"
            },
            {
                title: "Edital 2021",
                link: "/edital-2021"
            },
        ]);        
    }
    
    function handleTopicClick(){
        setIsActive(!isActive);
    }

    return (
        <div className={topicClass}>
            <div className="title" onClick={handleTopicClick}>
                <hr className="titleLine"/>
                <h2 className="titleText">{type}</h2>
                <BsChevronDown className="titleMoreIcon"/>
            </div>
            <ul className="lastNewsOfTopic">
                {
                    getLastNews().map(news => {
                        return (
                            <li className="lastNews">
                                {news.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Topic;