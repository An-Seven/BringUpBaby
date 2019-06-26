import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Back from '@/components/back/Back';
import './noeat.scss'
class Noeat extends Component {
  render() {
    return (
      <div className="noeat">
        <div className='noeat_top'>
          <Back data={{bc:'#F479A4',title:'能不能吃',color:"#fff"}}/>
             <div className="search">
                 <input type="text" placeholder="查查什么能吃"/>
             </div>
          </div>
             <div className="noeat_box">
                  <Link to="/homes/grain"><img src="/icon_img/noeat.png" alt=""/><span>五谷杂粮</span></Link>
                  <a><img src="/icon_img/noeat.png" alt=""/><span>五谷杂粮</span></a>
                  <a><img src="/icon_img/noeat.png" alt=""/><span>五谷杂粮</span></a>
                  <a><img src="/icon_img/noeat.png" alt=""/><span>五谷杂粮</span></a>
             </div>
      </div>
    )
  }
}

export default Noeat
