import React, { useEffect, useState } from 'react';
import './index.css';

const LastNews = () => {
    let [lastNews, setLastNews] = useState(null);
    let [loading, setLoading] = useState(true);

    function getLoadingComponents(){
        let loading = [];
        for (var i = 0; i <= 4; i++){
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
                        description: "A qualificação profissional é requisito indispensável para o acesso ao universo do trabalho. Mais do que isso, pode representar a realização pessoal e a conquista da própria dignidade. Neste sentido, o Governo do Ceará, por meio da Secretaria da Educação (Seduc), vem investindo continuamente na ampliação de oportunidades à população, de forma que um número cada vez maior de pessoas possa se preparar adequadamente para exercer um ofício."
                    }
                ])
            }, [1000])
        });
    }
    useEffect(() => {
        console.log("Carregando")
        getLastNews().then(value => {
            console.log("Carregado")
            setLastNews(value);
            setLoading(false);
        });
    }, [])

    if (loading)
        return getLoadingComponents();
    return (
        <h1>Carregado</h1>
    );
}

export default LastNews;