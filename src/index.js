import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Route, Switch } from 'react-router-dom'
import App from '@/layout/App';
import Users from '@/layout/Users';
import Homes from '@/layout/Homes';
import Babys from '@/layout/Babys';
import Login from '@/layout/Login';
import '@/Rem'
import '@/main.scss'
import '@/api'
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import '@/mock/index.js';
ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            <Switch> 
                <Route  path="/homes" component={Homes} />
                <Route  path="/users" component={Users} />
                <Route  path="/babys" component={Babys} />
                <Route  path="/login" component={Login} />
                <Route  path="/" component={App} /> 
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
