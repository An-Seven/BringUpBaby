import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Zao from '../views/home/zao/Zao';
import Eat from '../views/home/eat/Eat';
import Noeat from '../views/home/compon/noeat/Noeat';
import Detail from '../views/home/compon/detail/Detail';
import Chat from '../views/home/compon/chat/Chat';
import Play from '../views/home/compon//play/Ply'
import Trysee from '../views/home/compon/trysee/Trysee'
import Grain from '../views/home/compon/grain/Grain';
import Music from '../views/home/music/Music';
import Bofang from '../views/home/music/bofang/Bofang';
import Graindetail from '../views/home/compon/graindetail/Graindetail';
import Listen from '../views/home/compon/listen/Lister';
class Homes extends React.Component {
  render() {
    return (
      <div> 
         <Switch>
          <Route path='/homes/zao' component={Zao} />
          <Route path='/homes/eat' component={Eat} />
          <Route path='/homes/noeat' component={Noeat} />
          <Route path='/homes/listen' component={Listen} />
          <Route path='/homes/grain' component={Grain} />
          <Route path='/homes/detail' component={Detail} />
          <Route path='/homes/trysee' component={Trysee} />
          <Route path='/homes/chat' component={Chat} />
          <Route path='/homes/play' component={Play} />
          <Route path='/homes/music' component={Music} />
          <Route path='/homes/bofang' component={Bofang} />
          <Route path='/homes/graindetail/:id' component={Graindetail} />
        </Switch>
      </div> 
      
    )
  }

}

export default Homes;
