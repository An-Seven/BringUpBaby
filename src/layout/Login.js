import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Lead from '../views/login/lead/Lead';
import Register from '../views/login/register/Register';
import Wechat from '../views/login/wechat/Wechat';
import Login from '../views/login/Login';
class Babys extends React.Component {
  render() {
    return (
      <div> 
        <Switch>
          
          <Route path='/login/lead' component={Lead} />
          <Route path='/login/register' component={Register} />
          <Route path='/login/wechat' component={Wechat} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
      
    )
  }

}

export default Babys;
