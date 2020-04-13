import React from 'react';
import './Header.css';

export default props => (
    <header className="header">
        <div className="menuToggle"><i className="fa fa-bars fa-2x"></i></div>
        <div className="headerOptions">
            <div className="headerOptionsIcon"><i className="fa fa-home fa-2x"></i></div>
            <div className="headerOptionsIcon"><i className="fa fa-users fa-2x"></i></div>
            <div className="headerOptionsIcon"><i className="fa fa-envelope fa-2x"></i></div>
            <div className="headerOptionsIcon"><i className="fa fa-user fa-2x"></i></div>
        </div>
    </header>
);