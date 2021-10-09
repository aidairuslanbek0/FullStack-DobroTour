import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import 'macro-css'; 
import Autumn from './autumn/Autumn'


ReactDOM.render(
  <React.StrictMode>
    <Autumn />
  </React.StrictMode>,
  document.getElementById('root')
);

