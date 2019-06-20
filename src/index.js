import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter,Switch } from 'react-router-dom'
import './Rem/rem'
import './main.scss'
import App from './App';
ReactDOM.render(
    <BrowserRouter>
            <Route component={App} />
    </BrowserRouter>
    , document.getElementById('root'));
