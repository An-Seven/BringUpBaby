import React from 'react';
import './login.scss';
import Back from '@/components/back/Back'

class Login extends React.Component {
  state = {
    list:[],
    bl:false,
    show_boder:false
  }
  render () {
    return (
      <div className="login">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <h2>欢迎登录育宝宝账号</h2>
            <div className={this.state.show_boder?"tel show_boder":"tel"}>
              <input type="text" ref="name" placeholder="输入手机号/邮箱" onChange={this.show.bind(this)} />
            </div>
            <div className="psd">
              <input type="password" ref="pwd" placeholder="输入密码" onChange={this.show.bind(this)}/>
            </div>
            <div className="link">
              <span className="shortcut" onClick={()=>{this.props.history.push('/login/register')}}>短信快捷登录</span>
              <span className="forget">忘记密码</span>
            </div>
            {
           this.state.bl?<div className="enter" onClick={this.login.bind(this)}>登录</div>:<div className="enter" style={{background:"#FDE9F0",color:"#F479A4"}}>登录</div>
            
            }
          {this.state.bl?<div className="register">注册</div>
            :<div className="register"  onClick={this.toReg.bind(this)} style={{background:"#F479A4",color:"#FDE9F0"}} >注册</div>}
            <div className="logo"><img src="/icon_img/login-logo.png"></img></div>
            <p>登录即表示同意<span>寓见用户服务协议</span>及<s>隐私政策</s></p>
        </div>
      </div>
    )
  }
  toReg(){
    this.props.history.push('/login/register')
  }
  show(){
    if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.refs.name.value))){ 
      this.setState({
        show_boder:true
      })}else{
        console.log(2)
        this.setState({
          show_boder:false
        })
      }

    if(this.refs.name.value!==''&&this.refs.pwd.value!==''){
      this.setState({
            bl:true
      })
    }else{
      this.setState({
        bl:false
  })
    }
  }
  login(){
      if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.refs.name.value))){ 
        this.setState({
          show_boder:true
        })
           } else{
             var data={}
             data.name=this.refs.name.value
             data.pwd=this.refs.pwd.value
             console.log(data)
             this.setState({
              show_boder:false
            })
           }
     
  }
}
export default Login;