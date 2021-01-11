import React from 'react';
import Header from '../../components/Header';
import LastNewsList from '../../components/LastNewsList';
import LastNewsTitle from '../../components/LastNewsTitle';
import Topic from '../../components/Topic';

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <Topic type="Processo Seletivo"/>
                <Topic type="Feira Regional"/>
                <Topic type="Alunos Prêmios"/>
                <LastNewsTitle/>
                <LastNewsList/>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default HomePage;