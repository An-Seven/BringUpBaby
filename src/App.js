import React from 'react';
import {Switch,Redirect,Route} from 'react-router-dom'
import Footer from './components/footbar/Footer'
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";
import Course from "./views/course/Course";
import Home from "./views/home/Home";
import User from "./views/user/User";
import Baby from "./views/baby/Baby";
import Order from './views/user/order/Order';
import Collect from './views/user/collect/Collect';
import Checkins from './views/user/checkins/Checkins';
import Addbaby from './views/user/addbaby/Addbaby';
import Advice from './views/user/advice/Advice';
import Vip from './views/user/vip/Vip';
import UseCourse from './views/user/course/Course';
import Community from './views/community/Community'
function App() {
  return (
    <div className="App" style={{paddingTop:'.5rem',paddingBottom:".5rem"}}>

        <Navbar/>
        
        <Switch>
          <Route  path='/home' component={Home}/>
          <Redirect exact path="/" to="/home"/>
          <Route path='/course' component={Course}/>
          <Route path='/user' component={User}/>
          <Route path='/baby' component={Baby}/>
          <Route path='/community' component={Community}/>
          <Route path='/order' component= {Order}/>
          <Route path='/checkins' component= {Checkins}/>
          <Route path='/collect' component= {Collect}/>
          <Route path='/addbaby' component= {Addbaby}/>
          <Route path='/usecourse' component= {UseCourse}/>
          <Route path='/collect' component= {Collect}/>
          <Route path='/advice' component= {Advice}/>
          <Route path='/vip' component= {Vip}/>
          <Route component={Error}/>
        </Switch>
        
        <Footer/>
    </div>
  );
}

export default App;
