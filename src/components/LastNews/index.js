import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import app from '../../services/firebase';
import './index.css';

const LastNews = () => {
    const history = useHistory();
    let [lastNews, setLastNews] = useState(null);
    let [loading, setLoading] = useState(true);

    function handleRedirect(id) {
        history.push(`/noticia?article=${id}`);
    }
    function getPlaceHolderComponents() {
        let PlaceHolders = [];
        for (var i = 0; i <= 3; i++) {
            PlaceHolders.push(
                <div className="loadingNews" key={i}>
                    <div className="loadingImage" />
                    <div className="loadingContent">
                        <div className="loadingTitle" />
                        <div className="loadingDescription">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>
                </div>
            );
        }
        return PlaceHolders;
    }

    async function getLastNews() {
        let docs = (await app.firestore().collection("articles").orderBy("date", "desc").get()).docs
        let news = [];

        for (let doc of docs){
            let id = doc.id;
            let { title, description, topic, thumbExtension } = doc.data()
            let thumb =  await app.storage().ref(`images/${id}`).child(`thumb${thumbExtension}`)
                .getDownloadURL();
            news.push({
                title,
                description,
                thumb,
                id
            });
        }

        return news;
    }

    useEffect(() => {
        
        getLastNews().then(value => {
            setLastNews(value);
            setLoading(false);
        });
    }, [])

    if (loading)
        return getPlaceHolderComponents();

    return lastNews.map(news => {
        return (
            <div className="newsContainer" key={news.id} onClick={e => handleRedirect(news.id)}>
                <img className="newsImage" src={news.thumb} alt={news.title} />
                <div className="newsContent">
                    <h3 className="newsTitle">{news.title}</h3>
                    <div className="newsDescription">{news.description}</div>
                </div>
            </div>
        );
    })
}

export default LastNews;