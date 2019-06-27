import React from 'react'
import './baby.scss'
import { NavLink,Link } from 'react-router-dom';
import Babylist from '@/components/babylist/Babylist';
import { connect } from 'react-redux'
class Baby extends React.Component{
  render(){
    return(
      <div className="baby">
        <div className="baby-top">
          <img src="/icon_img/b-bg.png" alt=""/>
          <ul>
            <li>身高</li>
            <li>
              <img src="/icon_img/b-tx.png" alt=""/>
              <p>名字</p>
              {/* <i className="fa fa-spinner fa-pulse"></i> */}
              <p>年龄</p>
            </li>
            <li>体重</li>
          </ul>
        </div>
        <div className="baby-inner">
          <Link to='/babys/photos'>
            <img src="/icon_img/b-p.png" alt=""/>
            相册
          </Link>
          <Link to='/babys/relatives'>
            <img src="/icon_img/b-rl.png" alt=""/>
            亲友团
          </Link>
        </div>
        <div className="baby-list">
          <p><span>今天</span><span>第1天</span></p>
          <ul>
            {/* <li>今天宝宝出生了，长得很漂亮，虽然没有睁眼，但是肯定很大</li>
            <li>身高80cm,体重5kg</li>
            <li>宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没宝长得很漂亮宝宝长得很漂亮宝宝长得很漂</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没有睁眼，但是肯定很大</li>
            <li>身高80cm,体重5kg</li>
            <li>宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没宝长得很漂亮宝宝长得很漂亮宝宝长得很漂</li> */}
            <Babylist />
          </ul>
        </div>
      </div>
    )
  }
}
export default Baby;
