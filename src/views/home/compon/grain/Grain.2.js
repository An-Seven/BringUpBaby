import React, { Component } from 'react'
import { ImagePicker } from 'antd-mobile';
import './grain.scss'
import Search from '@/components/search/Search';
class Grain extends React.Component {
  state = {
    files:[],
    multiple: false,
    data:[{
          title:'大麦',
          type:[
            {name:'孕妇',value:1},
          ]

    }]
  }
  
  render() {
    const { files } = this.state;
    return (
    <div className='grain'>
      <Search data={{title:'五谷杂粮'}}/>
      <div className="grain_card">
          <h2>大麦</h2>
          <div className="grain_r">
            <img src="/img/damai.png" alt=""/>
          </div>
          <div className="grain_l">
            <p>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>孕妇</a>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>坐月子</a>
            </p>
            <p>
            <a href=""><img src="/icon_img/孕妇.png" alt=""/>哺乳</a>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>婴儿</a>
            </p>
          </div>
      </div>
      <div className="grain_card">
          <h2>大麦</h2>
          <div className="grain_r">
            <img src="/img/damai.png" alt=""/>
          </div>
          <div className="grain_l">
            <p>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>孕妇</a>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>坐月子</a>
            </p>
            <p>
            <a href=""><img src="/icon_img/孕妇.png" alt=""/>哺乳</a>
              <a href=""><img src="/icon_img/孕妇.png" alt=""/>婴儿</a>
            </p>
          </div>
      </div>  
    </div>
    );
  } 
}

export default Grain;