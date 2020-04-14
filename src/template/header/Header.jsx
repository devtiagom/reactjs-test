import React from 'react';
import './Header.css';

export default props => {
    const toggleMenu = () => {
        const element = document.querySelector(".sideBar");
        if (element.classList.contains("sideBarLarge")) {
            element.classList.remove("sideBarLarge");
            element.classList.add("sideBarSmall");
        } else {
            element.classList.remove("sideBarSmall");
            element.classList.add("sideBarLarge");
        }
    }

    return (
        <header className="header">
            <div className="menuToggle">
                <i className="fa fa-bars fa-2x" onClick={toggleMenu}></i>
            </div>
            <div className="headerOptions">
                <div className="headerOptionsIcon"><i className="fa fa-home fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-users fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-envelope fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-user fa-2x"></i></div>
            </div>
        </header>
    );
}