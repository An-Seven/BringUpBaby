import React from 'react';
import './babyinfo.scss';
import Back from '@/components/back/Back';

class Babyinfo extends React.Component {

  render () {
    return (
      <div className="babyinfo">
        <header className="header">
          <Back data= {{bc:"#F479A4",title:"宝贝信息"}}/>
          <span className="next">下一步</span>
        </header>
        <div className="content">
          <div className="settou">
            <img src="/icon_img/headicon.png"></img>
            <p>点击设置宝宝头像</p>
          </div>
          <div className="info">
            <p><span>昵称</span><i><input type="text"/></i></p>
            <p><span>生日</span><i><input type="text"/></i></p>
          </div>
        </div>
      </div>
    )
  }
}
export default Babyinfo;