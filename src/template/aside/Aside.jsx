import React from 'react';
import { connect } from 'react-redux';

import './Aside.css';
import MenuHeader from './MenuHeader';
import MenuBody from './MenuBody';

const Aside = props => (
    <aside className={`menu ${props.menuVisibility === 'large' ? 'menuLarge' : 'menuSmall'}`}>
        <MenuHeader menuVisibility={props.menuVisibility} />
        <MenuBody menuVisibility={props.menuVisibility} />
    </aside>
);

const mapStateToProps = state => ({ menuVisibility: state.menu.visibility });

export default connect(mapStateToProps)(Aside);