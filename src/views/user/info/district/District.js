import React from 'react';
import axios from 'axios';
import './district.scss';
import Back from '@/components/back/Back';
class District extends React.Component {
	state = {
		list: []
	}
	render() {
    return (
      <div className="District">
        <Back data={{bc:"#F479A4", title: "地区"}} />
        <div className="header"></div>
        <div className="content">
        </div>
          
      </div>
    )
  }
}
export default District;