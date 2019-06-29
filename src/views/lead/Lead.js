import React from 'react'
import './lead.scss'
class Lead extends React.Component {
  render() {
    return (
     <div className='lead'>
        <span className="login" onClick={this.login.bind(this)}>登录/注册</span>
        <span className="wx">微信登陆</span>
      </div>
    )
  }
  login(){
    this.props.history.push('/home')
  }
}

export default Lead
