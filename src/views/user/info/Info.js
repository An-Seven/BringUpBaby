import React from 'react';
import axios from 'axios';
import './info.scss';
import Back from '@/components/back/Back';
import { Link } from 'react-router-dom';
import { from } from '_rxjs@6.5.2@rxjs';
class Info extends React.Component {
	state = {
		list: []
	}
	render() {
    return (
      <div className="information">
        <Back data={{bc:"#F479A4", title: "个人信息"}} />
        <div className="header"></div>
        <div className="content">
          <ul className="name">
            <Link to="/users/tou">
              <span>头像</span>
              <i className="tou"><img src="/icon_img/headicon.png"></img></i>
            </Link>
            <Link to="/users/name">
              <span>名字</span>
              <s className="jian"><img src="/icon_img/i-2.png"></img></s>
            </Link>
          </ul>

          <ul className="profile">
            <li><span>性别</span> <i><img src="/icon_img/i-1.png"></img></i></li>
            <li><span>生日</span> <i><img src="/icon_img/i-1.png"></img></i></li>
            <Link to="/users/district"><span>地区</span> <s><img src="/icon_img/i-2.png"></img></s></Link>
          </ul>
        </div>
      </div>
    )
  }
}
export default Info;