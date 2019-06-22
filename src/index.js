import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import './Rem'
import './main.scss'
import './api'
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Route  path="/" component={App} />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
