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
        <Back data={{bc:"#F479A4", title: "修改名字"}} />
        <div className="header"></div>
        <div className="content">
          <label>
            <input type="text" className="setname" placeholder="小宝妈妈"/>
          </label>
          
        </div>
          
      </div>
    )
  }
}
export default District;