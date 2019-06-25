import React from 'react';
import { Switch, Route,Link} from 'react-router-dom'
import Addbaby from '@/views/user/addbaby/Addbaby';
import Advice from '@/views/user/advice/Advice';
import Back from '../components/back/Back';
class Users extends React.Component {
  render() {
    return (
      <div> 
         {/* <Back data={{bc:"#fff"}}/> */}
         <Switch>
          <Route path='/users/addbaby' component={Addbaby} />
          <Route path='/users/advice' component={Advice} />
        </Switch>
      </div> 
      
    )
  }

}

export default Users;
