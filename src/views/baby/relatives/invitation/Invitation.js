import React from 'react';
import './invitation.scss';
import Back from '@/components/back/Back';
// import { connect } from './node_modules/react-redux';
class Invitation extends React.Component{
  render(){
    return(
      <div className="invitation">
        <Back data={{bc:'#F479A4',title: '邀请'}}/>
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