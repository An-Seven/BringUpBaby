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
        <Back data={{bl:"1", title: "签到有礼"}} />
        <div className="box">
          <header className="header">
            <div className="integral"></div>
            <span className="name">查看积分</span>
          </header>
        </div>
      </div>
    )
  }
}

export default Checkins;