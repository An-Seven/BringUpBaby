import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Tabs } from 'antd-mobile';
import './listen.scss'
import Search from '@/components/search/Search'
const tabs = [
    { title: '音乐' },
    { title: '故事'},
  ];
class Listen extends Component {
  render() {
    return (
      <div className='listen'>
        <Search data={{title:'听一听'}}/>
    <Tabs 
     tabs={tabs}
     tabBarActiveTextColor="#FF6699"
     animated="false"
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div className="listen_left">
        <p>胎宝安睡曲</p>
        <div className="listen_list">
            <Link to="/homes/music"><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</Link>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 0-3岁必听 故事</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
        </div>
      </div>
      <div className="listen_left listen_right">
       <p>睡前故事</p>
       <div className="listen_list">
            <Link to="/homes/bofang"><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</Link>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 0-3岁必听 故事</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
            <a href=""><img src="/icon_img/listen/listen_01.png" alt=""/> 小蝌蚪找妈妈</a>
        </div>
      </div>
    </Tabs> 
  </div>
    )
  }
}

export default Listen
