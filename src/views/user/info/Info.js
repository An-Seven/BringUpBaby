import React from 'react';
import axios from 'axios';
import './info.scss';
import Back from '@/components/back/Back';
class Info extends React.Component {
	state = {
		list: []
	}
	render() {
    return (
      <div className="container">
        <Back data={{bc:"#F479A4", title: "个人信息"}} />
        <div className="box">
          <ul className="name">
            <li>
              <span>头像</span>
              <i className="tou"></i>
            </li>
            <li>
              <span>名字</span>
              <s className="jian"></s>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Info;