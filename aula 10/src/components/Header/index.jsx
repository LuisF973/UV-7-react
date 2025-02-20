import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
    <h1></h1>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/contato">Contato</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
            </ul>
        </nav>
    
        </header>
    );
};

export default Header