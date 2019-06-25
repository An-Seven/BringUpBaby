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
      <div className="banner" style={{height:"2rem",width:'3.75rem'}}>
         <Carousel
          autoplay
          infinite
          dots
        >
          {this.state.bannerList.map((val,index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: "2rem" }}
            >
              <img
                src={val.imgsrc}
                alt=""
                style={{ width: '100%', height:'2rem',background:"url(http://iph.href.lu/375x200) no-repeat"}}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Banner

