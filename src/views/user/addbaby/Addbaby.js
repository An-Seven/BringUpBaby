import React from 'react';
import './addbaby.scss'
import Back from '@/components/back/Back';
import { Link } from "react-router-dom"
class Addbaby extends React.Component {
	state = {
		list: []
  }
  componentDidMount(){
	}
	render() {
    return (
      <div className="addbaby">
        <Back data={{bc:"#F479A4",title:"宝贝信息"}}/>
        <div className="header"></div>
        <div className="content">
            <p>选择宝贝性别及孕期</p>
            <ul className="choose">
              <Link to="/users/babyinfo"><span className="blue">男宝贝</span></Link>
              <Link to='/users/babyinfo'><span className="pink">女宝贝</span></Link>
              <Link to='/users/babyinfo'><span className="yellow">孕期</span></Link>
            </ul>
        </div>
      </div>
    )
  }
}

export default Addbaby;