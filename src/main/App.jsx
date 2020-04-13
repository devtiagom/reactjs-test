import React from 'react';
import './App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Header from '../template/header/Header';
import Main from '../template/main/Main';
import Aside from '../template/aside/Aside';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main>
        <Routes />
      </Main>
    </div>
  );
}

export default App;