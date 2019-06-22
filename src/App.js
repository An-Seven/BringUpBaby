import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from './components/footbar/Footer'
import Navbar from "./components/navbar/Navbar";
import Error from "./components/error/Error";
import Course from "./views/course/Course";
import Home from "./views/home/Home";
import User from "./views/user/User";
import Baby from "./views/baby/Baby";
import Community from './views/community/Community'
import Loding from '@/components/loding/Loding'
import * as types from './store/types'
class App extends React.Component{
  render(){
    let {blnav}=this.props
    return (
      <div className="App">
        {blnav&& <Navbar/> }
        {/* <Loding /> */}
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect exact path="/" to="/home" />
          <Route path='/course' component={Course} />
          <Route path='/user' component={User} />
          <Route path='/baby' component={Baby} />
          <Route path='/community' component={Community} />
          <Route component={Error} />
        </Switch>
  
        <Footer />
      </div>
    )
  }
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    console.log(path)
    if (/home/.test(path)){
        this.props.viewnav(true);
      
    }
    if (/baby|user|course|community/.test(path)){
      this.props.viewnav(false);
      console.log(path)
    }
    
}
}


let a = (state) => {
  return ({
    blnav:state.blnav
  })
}
let b = (dispath) => ({
  viewnav: (bl) => dispath({ type: types.VIEW_NAV,data:bl })
})
const Capp = connect(a, b)(App)

export default Capp;
