import '../../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Routes from './routes';

function App(props) {
  return (
    <div className={`App ${props.menuVisibility === 'large' ? 'AppMenuLarge' : 'AppMenuSmall'}`}>
      <Routes />
    </div>
  );
}

const mapStateToProps = state => ({ menuVisibility: state.menu.visibility });

export default connect(mapStateToProps)(App);