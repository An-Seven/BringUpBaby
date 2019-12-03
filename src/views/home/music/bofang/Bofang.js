import React, { Component } from 'react';
import { Slider } from 'antd-mobile';
import { Link } from 'react-router-dom';
import Back from '@/components/back/Back';
import './bofang.scss';
class Bofang extends Component {
  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }
  state={
    play:false
  }
  play(){
    this.setState({
      play:!this.state.play
    })
  }
  render() {
    return (
      <div className="bofang">
          <Back data={{color:'#333'}}/>
          <header>妈妈（能力培养）月亮姐姐讲故事</header>
          <p>Great Big Stars 小蝌蚪找妈妈</p>
          <div className="bofang_img">
          <img className={this.state.play?"fa fa-spin":''} src="/icon_img/listen/bo/bo.png" alt=""/>
          </div>
          <p>本故事暂时没有文字内容哦~</p>
          <div className="bo_time">
            <a ><img src="/icon_img/listen/bo/time_01.png" alt=""/></a>
            <a  ><img style={{width:".3rem"}} src="/icon_img/listen/bo/time_02.png" alt=""/></a>
            <a ><img src="/icon_img/listen/bo/time_03.png" alt=""/></a>
          </div>
          <Slider
          className="jindu"
            style={{ marginLeft: '.5rem', marginRight: 30 }}
            defaultValue={10}
            min={0}
            max={30}
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
          <div className="bo_time2">
            <a ><img style={{width:".18rem",marginTop:'.2rem'}} src="/icon_img/listen/bo/left.png" alt=""/></a>
            <a className="bo_center" onClick={this.play.bind(this)}><img src="/icon_img/listen/bo/center.png" alt=""/></a>
            <a ><img style={{width:".18rem",marginTop:'.2rem'}} src="/icon_img/listen/bo/right.png" alt=""/></a>
          </div>
      </div>
    )
  }
}

export default Bofang;