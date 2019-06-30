import React from 'react'
import './lead.scss'
class Lead extends React.Component {
  render() {
    return (
     <div className='lead'>
       {/* <video  autoPlay muted loop className='vi'>
          <source src="/img/mp4/b.mp4" type="video/mp4" />>
        </video> */}

        <span className="login" onClick={this.login.bind(this)}>登录/注册</span>
        <span className="wx" onClick={this.wechat.bind(this)} >微信登陆</span>
      </div>
    )
  }
  login(){
    this.props.history.push('/login')
  }
  wechat(){
    this.props.history.push('/login/wechat')
  }
}

export default Lead
