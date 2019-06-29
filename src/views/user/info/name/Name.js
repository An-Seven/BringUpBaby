import React from 'react';
import axios from 'axios';
import './name.scss';
import Back from '@/components/back/Back';
class District extends React.Component {
	state = {
		list: []
	}
	render() {
    return (
      <div className="updatename">
        <div className="header">
        <Back data={{bc:"#F479A4", title: "修改名字"}} />
        <span>保存</span>
        </div>
        <div className="content">
          <div className="setname">
            <div className="text">
            <input type="text"  placeholder="小宝妈妈"/>
            </div>
            <p>请不要超过20个字符，可中文，字符</p>
          </div>
        </div>
      </div>
    )
  }
}
export default District;