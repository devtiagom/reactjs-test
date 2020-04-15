import React from 'react';

import './MenuBody.css';
import Menu from '../../components/menu/Menu';
import MenuItem from '../../components/menuItem/MenuItem';

export default props => (
    <div className="menuBody">
        <Menu>
            <MenuItem
                icon="home"
                title="Página Inicial"
                path="/"
                menuVisibility={props.menuVisibility}
            />
            <MenuItem
                icon="user"
                title="Seu perfil"
                path="/profile"
                menuVisibility={props.menuVisibility}
            />
        </Menu>
    </div>
);