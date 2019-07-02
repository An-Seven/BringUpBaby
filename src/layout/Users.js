import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Addbaby from '@/views/user/addbaby/Addbaby';
import Advice from '@/views/user/advice/Advice';
import Collect from '@/views/user/collect/Collect';
import Order from '@/views/user/order/Order';
import Checkins from '@/views/user/checkins/Checkins';
import Info from '@/views/user/info/Info';
import Vip from '@/views/user/vip/Vip';
import District from '@/views/user/info/district/District';
import Name from '@/views/user/info/name/Name';
import Tou from '@/views/user/info/tou/Tou';
import Babyinfo from '@/views/user/addbaby/babyinfo/Babyinfo'
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
          <Route path='/users/order' component={Order} />
          <Route path='/users/vip' component={Vip} />
          <Route path='/users/district' component={District} /> 
          <Route path='/users/name' component={Name} />
          <Route path='/users/tou' component={Tou} />
          <Route path='/users/babyinfo' component={Babyinfo}/>
        </Switch>
      </div>
    )
  }

}

export default Users;
