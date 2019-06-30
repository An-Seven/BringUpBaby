import React from 'react';
import './login.scss';
import Back from '@/components/back/Back'

class Login extends React.Component {
  state = {
    list:[]
  }
  render () {
    return (
      <div className="login">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <h2>欢迎登录育宝宝账号</h2>
            <div className="tel">
              <input type="text" placeholder="输入手机号/邮箱"/>
            </div>
            <div className="psd">
              <input type="password" placeholder="输入密码"/>
            </div>
            <div className="link">
              <span className="shortcut">短信快捷登录</span>
              <span className="forget">忘记密码</span>
            </div>
            <div className="enter" onClick={this.login.bind(this)}>登录</div>
            <div className="register" onClick={this.toReg.bind(this)}>注册</div>
            <div className="logo"><img src="/icon_img/login-logo.png"></img></div>
            <p>登录即表示同意<span>寓见用户服务协议</span>及<s>隐私政策</s></p>
        </div>
      </div>
    )
  }
  toReg(){
    this.props.history.push('/login/register')
  }
  login(){
    this.props.history.push('/home')
  }
}
export default Login;