import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Footer from '@/components/footbar/Footer'
import Error from "@/components/error/Error";
import Home from "@/views/home/Home";
import User from "@/views/user/User";
import Baby from "@/views/baby/Baby";
// import Community from '@/views/community/Community';
import Community from "@/views/login/Login"
import Loding from '@/components/loding/Loding';
import * as types from '@/store/types';
class App extends React.Component {
  render() {
    let { blLoding } = this.props
    return (
      <div className="App">
       {blLoding&&<Loding/>}
        <Switch>
          <Route path='/home' component={Home} />
          <Redirect exact path="/" to="/home" />
          <Route path='/user' component={User} />
          <Route path='/baby' component={Baby} />
          <Route path='/community' component={Community} />
          {/* <Route path='/login' component={Login} /> */}
          <Route component={Error} />
        </Switch>
        <Footer className="footer" />
      </div>
    )
  }
  /* -------------- */
  componentWillReceiveProps(nextProps) {
    let path = nextProps.location.pathname;
    if (/home/.test(path)) {
      // this.props.viewnav(true);
    }
    if (/baby|user|course|community/.test(path)) {
      // this.props.viewnav(false);
    }
  }
  /* -------------------- */

}


let a = (state) => {
  return ({
    blLoding: state.blLoding
  })
}
let b = (dispath) => ({
 /*  viewnav: (bl) => dispath({ type: types.VIEW_NAV, data: bl }) */
})
const Capp = connect(a, b)(App)

export default Capp;
