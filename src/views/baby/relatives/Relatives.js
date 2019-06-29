import React from 'react';
import Back from '@/components/back/Back';
import { NavLink,Link } from 'react-router-dom';
import './relatives.scss';
// import { connect } from './node_modules/react-redux';
class Relatives extends React.Component{
  render(){
    return(
      <div className="relatives">
        <Back data={{bc:'#F479A4',title: '亲友团'}}/>
        <div className="member">
          <ul>
            <li>
              <img src="/icon_img/b-mum.png" alt=""/>
              <p>妈妈（我）</p>
            </li>
            <li>
              <img src="https://iph.href.lu/69x69" alt=""/>
              <p>爸爸</p>
            </li>
          </ul>
        </div>
        <div className="member_list">
          <p className="biaoti">
            你还可以邀请
          </p>
          <ul>
            <Link to='/babys/relatives/invitation'>
              <p>
                爷爷
              </p>
            </Link>
            <Link to='/babys/relatives/invitation'>
              <p>
                奶奶
              </p>
            </Link>
            <Link to='/babys/relatives/invitation'>
              <p>
                姥姥
              </p>
            </Link>
            <Link to='//babys/relatives/invitation'>
              <p>
                姥爷
              </p>
            </Link>
          </ul>
        </div>
        <div className="fenxiang_list">
          <p className="biaoti">
            你还可以通过以下方式邀请更多亲友哦
          </p>
          <ul>
            <li>
              <img className="wechartimg" src="/icon_img/b-wechart.png" alt=""/>
            </li>
            <li>
              <img className="qqimg" src="/icon_img/b-qq.png" alt=""/>
            </li>
            <li>
              <img className="sinaimg" src="/icon_img/b-sina.png" alt=""/>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Relatives;