import React, { Component } from 'react'
import {getDate} from '@/api'
import {Carousel} from 'antd-mobile'
class Banner extends Component {
    state = {
      bannerList:[]
       
      }
     async componentDidMount(){
       this.setState({
         bannerList:await getDate('/getBanner')
       })
      }
  render() {
    return (
      <div className="banner" style={{height:"2rem"}}>
         <Carousel
          autoplay
          infinite
          dots
        >
          {this.state.bannerList.map((val,index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.imgsrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'2rem' }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Banner

