import React from 'react';
import { Switch, Route,Link} from 'react-router-dom'
import Addbaby from '@/views/user/addbaby/Addbaby';
import Advice from '@/views/user/advice/Advice';
import Collect from '@/views/user/collect/Collect';
import Checkins from '@/views/user/checkins/Checkins';
import Info from '@/views/user/info/Info';
import Back from '../components/back/Back';
class Users extends React.Component {
  render() {
    return (
      <div className="UserApp">
        {/* <Back data={{bc:"#fff"}}/> */}
         <Switch>
          <Route path='/users/info' component={Info} />
          <Route path='/users/addbaby' component={Addbaby} />
          <Route path='/users/advice' component={Advice} />
          <Route path='/users/collect' component={Collect} />
          <Route path='/users/checkins' component={Checkins} />
        </Switch>
      </div>
    )
  }

}

export default Users;
