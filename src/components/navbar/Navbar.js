import React from 'react'
import {SearchBar } from 'antd-mobile'
import './navbar.scss'
  class Navbar extends React.Component {
    render(){
        return(
        <div className="navbar">
          <span className="logo">LOGO</span>
            <input type="text" placeholder=" 有问题就在这里搜索吧" />
            <span className="message" onClick={()=>{  
              console.log("签到成功")
            }}>签到<i className="fa fa-commenting-o"></i></span>
        </div>
        )
    }
   
}
export default Navbar