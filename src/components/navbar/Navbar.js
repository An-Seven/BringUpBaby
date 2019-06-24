import React from 'react'
import {SearchBar } from 'antd-mobile'
import './navbar.scss'
  class Navbar extends React.Component {
    state = {
      value: '美食',
    };
    render(){
        return(
        <div className="navbar">
          <span className="logo">logo</span>
            <input type="text" placeholder=" 有问题就在这里搜索吧" />
            <span className="message">签到<i className="fa fa-commenting-o"></i></span>
        </div>
        )
    }
   
}
export default Navbar