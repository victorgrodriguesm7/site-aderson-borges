import React from 'react';
import Header from '../../components/Header';
import Contacts from '../../components/Contacts';
import './index.css';

const AboutPage = () => {
    return (
        <>
            <Header type="about"/>
            <main className="aboutContent">
                <div className="imagePlaceholder"></div>
                <p>A Escola Estadual de Educação Profissional Aderson Borges de Carvalho, é mantida pelo Governo do Estado do Ceará desde sua criação no ano de 2001 conforme decreto nº 26203, publicado no Diário Oficial em 01 de agosto de 2001, passando a ser EEEP Aderson Borges de Carvalho, conforme parecer 103 de 1º de março de 2010, ofertando ensino médio técnico profissionalizante em tempo integral.</p>
                <p>Nossa escola tem por finalidade ofertar o Ensino Médio integrado ao ensino técnico profissionalizante e em tempo integral conforme a legislação vigente, promovendo um ensino de qualidade, fundamentado em valores éticos e morais com o intuito de formar jovens qualificados para o mercado de trabalho.</p>

                <h3>Contatos:</h3>
                <Contacts/>
            </main>
            <footer>

            </footer>
        </>
    );
}

export default AboutPage;