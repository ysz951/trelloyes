import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './store.js';
import App from './App';


ReactDOM.render(
  <App lists = {STORE.lists} allCards = {STORE.allCards}/>,
  document.getElementById('root')
);


