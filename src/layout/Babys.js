import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Back from '../components/back/Back';
// 在这里导入组件
class Babys extends React.Component {
  render() {
    return (
      <div> 
        <Back data={{bc:'red'}}/>
         <Switch>
          {/* <Route path='/users/addbaby' component={Addbaby} /> */}
        </Switch>
      </div> 
      
    )
  }

}

export default Babys;
