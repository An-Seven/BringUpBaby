import React from 'react';
import './register.scss';
import axios from 'axios'
import {Ti} from '@/api'
import Back from '@/components/back/Back'
class Register extends React.Component {
  state = {
    list:[],
    getcode:'获取验证码',
    bl:true
  }
  render () {
    return (
      <div className="register">
        <header className="header">
          <Back data={{bc:"#F479A4"}} />
        </header>
        <div className="content">
          <h2>手机号登录/快捷登录</h2>
            <div className="tel">
              <input type="text" ref='phone' placeholder="输入手机号/邮箱"/>
            </div>
            <div className="code">
              <input type="text" ref="code" placeholder="输入验证码" />
              {this.state.bl?<button className="getCode" onClick={this.getcode.bind(this)}>{this.state.getcode}</button>
              :<button className="getCode" >{this.state.getcode}s</button>}
            </div>
            <div className="link">
              <span className="shortcut" onClick={()=>{this.props.history.push('/login')}}>账号密码登录</span>
            </div>
            <div className="enter" onClick={this.login.bind(this)}>登录</div>
            {/* <div className="zhuce">注册</div> */}
            <div className="logo"><img src="/icon_img/login-logo.png"></img></div>
            <p>登录即表示同意<span>寓见用户服务协议</span>及<s>隐私政策</s></p>
        </div>
      </div>
    )
  }
  getcode(){
    if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(this.refs.phone.value))){
      Ti(0,'手机号不正确')
      this.refs.phone.value=''
    }else{

      this.setState({
        getcode:59,
        bl:false
      })
      var ji=setInterval(()=>{
        this.setState({
          getcode:this.state.getcode-1
        })
       // console.log(this.state.getcode)
        if(this.state.getcode<=0){
          this.setState({
            getcode:"点击重新发送",
            bl:true
          })
          clearInterval(ji)
        }
      },1000)
     
// 13083640229
      var name=this.refs.phone.value
      axios.get('code/user/getcode/',{
        params:{
          name:name
        }
      }).then(res=>{
        console.log(res.data)
        if(res.data.status===0){
          var datas={"phone":res.data.data.name,"code":"【育宝宝】"+res.data.data.code}
        console.log(datas)
        axios.post('php/code/index.php',datas).then(res=>{
          console.log(res.data)
        })
        }
      }) 
    }
    
  }
  login(){
   
  }
}
export default Register;