import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store'

const appWithData = App(STORE);
ReactDOM.render(appWithData, document.getElementById('root'));
