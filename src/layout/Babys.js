import React from 'react';
import { Switch, Route} from 'react-router-dom';
// import Baby from '@/views/baby/Baby';
import First_time from '@/views/baby/first_time/First_time';
import Relatives from '@/views/baby/relatives/Relatives';
import Invitation from '@/views/baby/relatives/invitation/Invitation';
import Back from '../components/back/Back';
// 在这里导入组件
class Babys extends React.Component {
  render() {
    return (
      <div> 
        <Switch>
          {/* <Route path='/users/addbaby' component={Addbaby} /> */}
          <Route path='/babys/first_time' component={First_time} />
          <Route path='/babys/relatives' component={Relatives} />
          <Route path='/babys/relatives/invitation' component={Invitation} />
        </Switch>
      </div>
      
    )
  }

}

export default Babys;
