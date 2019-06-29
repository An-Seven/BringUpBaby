import React from 'react';
import './register.scss';
import Back from '@/components/back/Back'
class Register extends React.Component {
  state = {
    list:[]
  }
  render () {
    return (
      <div className="register">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <h2>手机号登录/注册</h2>
            <div className="tel">
              <input type="text" placeholder="输入手机号/邮箱"/>
            </div>
            <div className="code">
              <input type="text" placeholder="输入验证码"/>
              <button className="getCode">获取验证码</button>
            </div>
            <div className="link">
              <span className="shortcut">账号密码登录</span>
            </div>
            <div className="enter">登录</div>
            <div className="zhuce">注册</div>
            <div className="logo"><img src="/icon_img/login-logo.png"></img></div>
            <p>登录即表示同意<span>寓见用户服务协议</span>及<s>隐私政策</s></p>
        </div>
      </div>
    )
  }
}
export default Register;