import React from 'react';
import axios from 'axios';
import './tou.scss';
import Back from '@/components/back/Back';
class Tou extends React.Component {
	state = {
		list: []
	}
	render() {
    return (
      <div className="tou">
        <Back data={{bc:"#F479A4", title: "设置头像"}} />
        <div className="header"></div>
        <div className="content">
        </div>
          
      </div>
    )
  }
}
export default Tou;