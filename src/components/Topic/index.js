import React, { useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import app from '../../services/firebase';
import './index.css';
const topics = {
    "Processo Seletivo": "Processo Seletivo",
    "Feira Regional": "Feira Regional",
    "Alunos Prêmios": "Alunos Premios"
}

const Topic = ({ type="Processo Seletivo"}) => {
    let [isActive, setIsActive] = useState(false);
    let [isLoading, setIsLoading] = useState(true);
    let [lastNews, setLastNews] = useState(null)
    let topicClass = "topic " + (isActive ? "active" : "");

    async function getLastNews(){
        let docs = (await app.firestore().collection('articles').get()).docs;
        let lastNews = [];
        for (let doc of docs){
            let id = doc.id;
            let { title, topic } = doc.data();
            if (topics[type] !== topic)
                continue
            lastNews.push({
                title,
                id
            })
        }

        return lastNews;
    }
    
    function handleTopicClick(){
        setIsActive(!isActive);
    }

    useEffect(() => {
        getLastNews().then(lastNews => {
            setLastNews(lastNews);
            setIsLoading(false);
        })
    }, [])

    return (
        <div className={topicClass}>
            <div className="title" onClick={handleTopicClick}>
                <hr className="titleLine"/>
                <h2 className="titleText">{type}</h2>
                <BsChevronDown className="titleMoreIcon"/>
            </div>
            <ul className="lastNewsOfTopic">
                {
                    (isLoading) ? null : lastNews.map((news) => {
                        return (
                            <li className="lastNews">
                                <Link to={`/noticia?article=${news.id}`}>{news.title}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Topic;