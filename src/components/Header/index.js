import React, { useState } from 'react';
import Logo from "../../assets/brasao-estado-nome-escola.png"
import { VscSearch as SearchIcon } from 'react-icons/vsc'
import './index.css';

const Header = () => {
    let [isInputActive, setIsInputActive] = useState(false);
    let inputClass = "searchInput " + (isInputActive ? "active" : "");

    function handleAnimation(){
        setIsInputActive(!isInputActive);
    }

    return (            
        <header className="header">
            <img className="headerLogo" src={Logo} alt="Logo"/>
            <nav className="navMenu">
                <h1>Notícias</h1>
                <hr/>
                <h1>Sobre</h1>
                <hr/>
                <div className="search">
                    <input className={inputClass} type="text"/>
                    <SearchIcon className="searchIcon" onClick={handleAnimation}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;