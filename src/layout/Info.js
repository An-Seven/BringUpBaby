import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Addbaby from '@/views/user/addbaby/Addbaby';
import Back from '../components/back/Back';
class Users extends React.Component {
  render() {
    return (
      <div className="UserApp">
        {/* <Back data={{bc:"#F479A4"}}/> */}
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
