import React from 'react';
import './wechat.scss';
import Back from '@/components/back/Back'
class Wechat extends React.Component {
  state = {
    list:[]
  }
  componentDidMount(){
    
  }
  render () {
    return (
      <div className="wechat">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <div className="title">
            <p><img src="/icon_img/wechat-logo.png"></img>育宝宝 申请使用</p>
            <h3>你的微信头像、昵称、地区和性别信息</h3>
          </div>
          <div className="info">
            <h6>你可使用不同的个人信息登录</h6>
            <div className="default">
              <img src="/icon_img/wechat.png"></img>
              <div className="name">
                <h3>徐妖精</h3>
                <p>微信个人信息</p>
              </div>
              <span className="checked"><img src="/icon_img/checked.png"></img></span>
            </div>
            <div className="other">
              <div className="add"><img src="/icon_img/wechat-add.png"></img></div>
              <h3>新建用户信息</h3>
              <img src="/icon_img/wechat-jian.png" className="right"></img>
            </div>
            <div className="agree">同意</div>
            <div className="reject">拒绝</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Wechat;