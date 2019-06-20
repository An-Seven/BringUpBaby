import React from 'react'
import ReactDOM from 'react-dom'
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Banner.scss'
class Banner extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://img5.imgtn.bdimg.com/it/u=3300305952,1328708913&fm=26&gp=0.jpg',
         'http://k.zol-img.com.cn/sjbbs/7692/a7691515_s.jpg', 
         'http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg'],
      
      });
    }, 500);
  }
  render() {
    return (
        <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      
    );
  }
}

export default Banner