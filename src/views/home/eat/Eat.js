import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './eat.scss'
import Back from '@/components/back/Back';
class Eat extends Component {
  render() {
    return ( 
      <div className='eat'>
        <Back data={{bc:'#F479A4',title:'生活知识',color:"#fff"}}/>
        <div className="eat_nav">
          <Link to='/homes/noeat'><img src="/icon_img/eat_01.png" alt=""/><span>能不能吃</span></Link>
          <a ><img src="/icon_img/eat_02.png" alt=""/><span>食谱</span></a>
          <Link to="/homes/listen"><img src="/icon_img/eat_03.png" alt=""/><span>听一听</span></Link>
        </div>
        <div className="eat_box">
          <p>今日知识推荐</p>
          <div className="eat_bar">
            <a href="">
              <img src="/icon_img/eat_bar01.png" alt=""/>
              <div className="eat_bar_right">
                <span>孕期营养</span>
                <p>准妈妈常吃鱼预防早产</p>
              </div>  
            </a>
            <a href="">
              <img src="/icon_img/eat_bar02.png" alt=""/>
              <div className="eat_bar_right">
                <span>孕期食谱</span>
                <p>胡萝卜香菇炖鸡</p>
              </div>  
            </a>  
          </div>
          <p className="eat_tui">今日推荐<img src="/icon_img/dian.png" alt=""/><span>听一听</span></p>
          <div className="eat_foot">
            <a href="">
              <img src="/icon_img/eat_f01.png" alt=""/><span>班得瑞</span>
            </a>
            <a href="">
              <img src="/icon_img/eat_f02.png" alt=""/><span>胎教精选</span>
            </a>
            <a href="">
              <img src="/icon_img/eat_f03.png" alt=""/><span>格林故事</span>
            </a>
            <a href="">
              <img src="/icon_img/eat_f04.png" alt=""/><span>动物世界</span>
            </a>
            <a href="">
              <img src="/icon_img/eat_f05.png" alt=""/><span>怀孕与胎教</span>
            </a>
            <a href="">
              <img src="/icon_img/eat_f06.png" alt=""/><span>必听经典故事</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Eat
