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
      <div className = "checkins">
        <Back data={{bc:"#F479A4", title: "我的签到"}} />
        <div className="content">
          <div className="total">
            <div className="integral">20分</div>
            <span className="title">已经签到4天</span>
            <ul className="add">
              <li>+5</li>
              <li>+5</li>
              <li>+5</li>
              <li>+5</li>
              <li>+5</li>
            </ul>
          </div>
          <div className="coupon">
            <h5> 兑换优惠券 </h5>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Checkins;