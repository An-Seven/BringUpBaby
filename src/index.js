import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '@/layout/App';
import '@/Rem'
import '@/main.scss'
import '@/api'
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch>
                <Route  path="/" component={App} />
                {/* <Route  path="/detail" component={Detail} /> */}
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
