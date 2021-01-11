import React, { useEffect, useState } from 'react';
import './index.css';

const LastNews = () => {
    let [lastNews, setLastNews] = useState(null);
    let [loading, setLoading] = useState(true);
    function getLoadingComponents(){
        let loading = [];
        for (var i = 0; i <= 3; i++){
            loading.push( 
                <div className="loadingNews" key={i}>
                    <div className="loadingImage"/>
                    <div className="loadingContent">
                        <div className="loadingTitle"/>
                        <div className="loadingDescription">
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                    </div>
                </div>
            );
        }
        return loading;
    }
    async function getLastNews(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Ceará Comemora 10 anos de EEEP's",
                        thumb: "https://www.seduc.ce.gov.br/wp-content/uploads/sites/37/2019/09/Foto-EEEP-1200x675.png",
                        description: "A qualificação profissional é requisito indispensável para o acesso ao universo do trabalho. Mais do que isso, pode representar a realização pessoal e a conquista da própria dignidade."
                    }
                ])
            }, [1000])
        });
    }
    useEffect(() => {
        getLastNews().then(value => {
            setLastNews(value);
            setLoading(false);
        });
    }, [])

    if (loading)
        return getLoadingComponents();
    
    return lastNews.map(news => {
        return (
            <div className="newsContainer">
                <img className="newsImage" src={news.thumb} alt={news.title}/>
                <div className="newsContent">
                    <h3 className="newsTitle">{news.title}</h3>
                    <div className="newsDescription">{news.description}</div>
                </div>
            </div>
        );
    })
}

export default LastNews;