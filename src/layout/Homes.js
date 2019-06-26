import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Zao from '../views/home/zao/Zao';
import Eat from '../views/home/eat/Eat';
import Noeat from '../views/home/compon/Noeat';
class Homes extends React.Component {
  render() {
    return (
      <div> 
     
         <Switch>
          <Route path='/homes/zao' component={Zao} />
          <Route path='/homes/eat' component={Eat} />
          <Route path='/homes/noeat' component={Noeat} />
        </Switch>
      </div> 
      
    )
  }

}

export default Homes;
