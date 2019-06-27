import React from 'react';
import Back from '@/components/back/Back'
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
              <img src="https://iph.href.lu/69x69" alt=""/>
              <p>妈妈（我）</p>
            </li>
            <li>
              <img src="https://iph.href.lu/69x69" />
              <p>爸爸</p>
            </li>
          </ul>
        </div>
        <div className="member_list">
          <p>
            你还可以邀请
          </p>
          <ul>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
            <li>
              <img src="https://iph.href.lu/60x60?text=%E7%88%B7%E7%88%B7" alt="" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Relatives;