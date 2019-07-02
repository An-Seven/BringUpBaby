import React from 'react';
import axios from 'axios';
import './vip.scss'
import Back from '@/components/back/Back';
class Vip extends React.Component {
	state = {
		list: []
  }
  componentDidMount(){
	}
	render() {
    return (
      <div className="vip">
        <Back data={{bc:"#F479A4", title: "会员中心"}} />
        <header className="top"></header>
        <div className="user">
          <img src="/icon_img/headicon.png"></img>
        </div>
        <div className="content">
          
        </div>
      </div>
    )
  }
}

export default Vip;