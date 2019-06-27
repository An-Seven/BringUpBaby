import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Back from '@/components/back/Back';
import './detail.scss'
class Detail extends Component {
  render() {
    return (
      <div className="detail">
          <Back data/>
          <div className="detail_banner">
            <img src="/img/detail_banner.png" alt=""/>
          </div>
          <h2>早教启蒙</h2>
          <span>500人已买</span>
          <p>潇潇导师<span>主讲</span></p>
          <div className="ftimg">
           <img src="/img/detail_banner02.png" alt=""/>
          </div>
          <div className="brief ">
           <span>   
           从婴幼儿发展规律特点出发，讲科学的视频课程和
专业的教具相结合，一站式解决家长的所有难题。精心
策划五大课程，更科学的培养体系，全面发展孩子的五
大能力。             
           </span>
          </div>
          <div className="detail_footer">
            <Link to='/homes/chat' href="">咨询</Link>
            <Link to="/homes/trysee">试看</Link>
            <Link to="/homes/play">立即购买<span>99.9</span>元</Link>
          </div>
      </div>
    )
  }
}

export default Detail
