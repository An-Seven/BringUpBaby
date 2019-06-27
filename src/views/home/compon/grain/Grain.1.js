import React, { Component } from './node_modules/react'
import './grain.scss'
import Search from './node_modules/@/components/search/Search';
class Grain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     list: [
      {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
    ] 
    };
  }
  render() {
    return (
    <div>
      <Search data={{title:'五谷杂粮'}}/>
      <div className="grain_card">
12312
      </div>
    </div>
    );
  }
}

export default Grain;