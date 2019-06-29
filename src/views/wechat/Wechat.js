import React from 'react';
import './wechat.scss';
import Back from '@/components/back/Back'
class Wechat extends React.Component {
  state = {
    list:[]
  }
  render () {
    return (
      <div className="wechat">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <div className="title">
            <p>育宝宝 申请使用</p>
            <h3>你的微信头像、昵称、地区和性别信息</h3>
          </div>
          <div className="info">
            <h6>你可使用不同的个人信息登录</h6>
            <div className="default">
              <img></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Wechat;