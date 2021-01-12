import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/brasao-estado-nome-escola.png"
import { VscSearch as SearchIcon } from 'react-icons/vsc'
import './index.css';

const Header = ({type}) => {
    let [isInputActive, setIsInputActive] = useState(false);

    function handleAnimation(){
        setIsInputActive(!isInputActive);
    }

    return (            
        <header className="header">
            <img className="headerLogo" src={Logo} alt="Logo"/>
            <nav className={"navMenu " + (isInputActive ? "active" : "")}>
                <h1 className={type === "main" ? "selected" : ""}>
                    <Link className="navOption" to="/">Notícias</Link>
                </h1>
                <hr/>
                <h1 className={type === "about" ? "selected" : ""}>
                    <Link className="navOption" to="/sobre">Sobre</Link>
                </h1>
                <hr/>
                <div className="search">
                    <input className="searchInput" type="text"/>
                    <SearchIcon className="searchIcon" onClick={handleAnimation}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;