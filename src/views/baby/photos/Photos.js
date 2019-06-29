import React from 'react';
import Back from '@/components/back/Back';
import { NavLink,Link } from 'react-router-dom';
import './photos.scss';
// import { connect } from './node_modules/react-redux';
class Photos extends React.Component{
  render(){
    return(
      <div className="photo">
        <Back data={{bc:'#F479A4',title: '相册'}}/>
        <div className="xiangce">
          <ul>
            <li>
              <span className="xinjian">新建相册</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>我们在一起</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>我们在一起</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>小宝走路照</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>小宝第一次</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>今天很开心</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>我们的全家福</span>
              <span>30张</span>
            </li>
            <li>
              <img src="http://iph.href.lu/150x130" alt="" />
              <span>我们在一起</span>
              <span>30张</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Photos;