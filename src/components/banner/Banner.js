import React, { Component } from 'react'
import './banner.scss'
import {getDate} from '@/api'
import {Carousel} from 'antd-mobile'
class Banner extends Component {
    state = {
      bannerList:[1]
       
      }

     async componentDidMount(){
       
       this.setState({
         bannerList:await getDate('/getBanner')
       })
      
      }

  render() {
    return (
      <div className="banner" >
         <Carousel
          autoplay
          infinite
          dots
        >
          {this.state.bannerList.map((val,index) => (
            <a
              key={index}        
            >
              <img
                src={val.imgsrc}
                alt=""    
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Banner

