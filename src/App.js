import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '@/component/Home/Home.js'
import 'antd-mobile/dist/antd-mobile.css';
import Head from '@/component/Head/Head.js'
import Tan from '@/component/tansition/Tansition.js'
import Async from '@/component/asyn/Asyn.js'
import Bai from '@/component/baidu/Baidu.js'
import Footer from './component/views/footer/Footer.js'
import Error from './component/views/Error'
const App=()=> (
    <div className="App" style={{paddingBottom:'.5rem'}}>
      <Head/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Redirect  exact  path='/' to="home"/>
        <Route path="/tan" component={Tan}/>
        <Route path="/bai" component={Bai}/>
        <Route path="/async" component={Async}/>
        <Route component={Error}/>
      </Switch>
   <Footer/> 
    </div>
  )

export default App;
