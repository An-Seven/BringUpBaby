import React from 'react';
import axios from 'axios';
import './checkins.scss';
import Back from '@/components/back/Back';
class Checkins extends React.Component {
	state = {
		list: []
  }
  componentDidMount(){
	}
	render() {
    return (
      <div className = "container">
        <Back data={{bl:"#F479A4", title: "签到有礼"}} />
        <div className="box">
          <div className="header">
            <div className="integral"></div>
            <span className="title">查看积分</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Checkins;