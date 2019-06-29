import React from 'react'
import {SearchBar } from 'antd-mobile'
import './navbar.scss'
  class Navbar extends React.Component {
    render(){
        return(
        <div className="navbar">
          <span className="logo">
            <img src="/icon_img/logo.png" alt=""/>
          </span>
            <input type="text" placeholder=" 有问题就在这里搜索吧" />
            <span className="message" onClick={(e)=>{  
             e.stopPropagation(); 
             console.log("签到成功")
            }}>签到<i className="fa fa-commenting-o" onClick={(e)=>{ 
              e.stopPropagation(); //阻止事件冒泡
              console.log("消息")
            }}></i></span>
        </div>
        )
    }
   
}
export default Navbar