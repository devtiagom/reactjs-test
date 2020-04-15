import React from 'react';
import { connect } from 'react-redux';

import './Main.css';

const Main = props => (
    <main className="main">
        {props.children}
    </main>
);

const mapStateToProps = state => ({ menuVisibility: state.menu.visibility });

export default connect(mapStateToProps)(Main);