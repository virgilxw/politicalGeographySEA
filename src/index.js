import React from 'react';
import ReactDOM from 'react-dom';
import Essay from './Essay';
import './index.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Header />    
    <div id="topBuffer"/>
    <Essay />
  </div>,
  document.getElementById('root')
);
