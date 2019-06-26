import React, { Component  } from 'react';
import './advice.scss';
import Back from '@/components/back/Back'
class Advice extends Component {
  state = { }
  componentDidMount () {

  }
  render () {
    return (
      <div className="container">
        <header className="header">
          {/* <i className="goback"><img src="http://iph.href.lu/25x25"></img></i>
          <h2 className="title">意见反馈</h2>
          <span className="send">发送</span> */}
          <Back data={{bc:'1', title:"意见反馈"}}/>
          <span className="send">发送</span>
        </header>
        <div className="box">
          <div className="txt">
            <textarea placeholder="问题及意见" className="suggest"></textarea>
            <span>0/200</span>
          </div>
          <div className="upload">
            <h5>上传图片</h5>
            <ul className="add">
              <li><img src="http://iph.href.lu/80x80"></img></li>
              <li> <img src="http://iph.href.lu/80x80"></img></li>
              <li><img src="http://iph.href.lu/80x80"></img></li>
            </ul>
            <span>可上传三张</span>
          </div>

          <div className="concat">
            <h5>联系方式</h5>
            <div className="tel">
              <div className="number">
              <input type="text" placeholder="电话/微信"/>
              </div>
              <div className="text">
                我们将认真的阅读您的意见，并尽早回复，咨询更多问题，可拨打客服电话：410-555-6666感谢您的支持！
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Advice;