import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Header.css';
import { toggleMenu } from '../aside/menuActions';

const Header = props => (
        <header className={`header ${props.menuVisibility === 'large' ? 'headerMenuLarge' : 'headerMenuSmall'}`}>
            <div className="menuToggle">
                <i className="fa fa-bars fa-2x" onClick={() => props.toggleMenu(props.menuVisibility)}></i>
            </div>
            <div className="headerOptions">
                <div className="headerOptionsIcon"><i className="fa fa-home fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-users fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-envelope fa-2x"></i></div>
                <div className="headerOptionsIcon"><i className="fa fa-user fa-2x"></i></div>
            </div>
        </header>
    );

const mapStateToProps = state => ({ menuVisibility: state.menu.visibility });
const mapDispatchToProps = dispatch => bindActionCreators({ toggleMenu }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);