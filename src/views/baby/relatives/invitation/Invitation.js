import React from 'react';
import './invitation.scss';
// import { connect } from './node_modules/react-redux';
class Invitation extends React.Component{
  render(){
    return(
      <div className="invitation">
        <header className="header">
          <h4>亲友团</h4>
        </header>
        <div className="invitation_card">
          <p>ADSWER</p>
        </div>
        <p className="tips">
          对方下载“育宝宝”输入邀请码即可进入亲友团，一起观看宝宝的成长记录。
        </p>
        <div className="btn">
          <button>微信邀请</button>
          <button>QQ邀请</button>
        </div>
      </div>
    )
  }
}
export default Invitation;