import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import app from '../../services/firebase';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

const NewsPage = () => {
    const articleId = new URLSearchParams(useLocation().search).get("article") ?? "";
    let [news, setNews] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    
    async function getNews(){
        let doc = await app.firestore().collection("articles").doc(articleId).get();

        return (
            JSON.parse(doc.data().article)
        );
    }

    useEffect(() => {
        getNews().then(news => {
            setNews(news);
            setIsLoading(false);
        })
    })
    return (
        <>
            <Header type="main"/>
            <main className="articleContainer">
                {
                    isLoading ? <h1> Carregando Notícia </h1> : ReactHtmlParser(news)
                }
            </main>
            <footer>
                
            </footer>
        </>
    );
};

export default NewsPage;