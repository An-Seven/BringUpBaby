import React from 'react';
import axios from 'axios';
import './collect.scss';
import Back from '@/components/back/Back';
class Collect extends React.Component {
	state = {
		list: []
  }
  componentDidMount(){
	}
	render() {
    return (
      <div className = "container">
        
        <Back data={{bc:"#F479A4", title: "我的收藏"}} />
        <div className="header"></div>
        <div className="box">
          <ul>
            <li>育儿知识</li>
            <li>宝宝食谱</li>
            <li>能不能吃</li>
            <li>宝宝听听</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Collect;