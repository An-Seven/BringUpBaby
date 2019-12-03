import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Back from '@/components/back/Back';
import './detail.scss'
import {getDate} from '@/api'
class Detail extends Component {
  constructor(props){
    super(props)
    this.state={
      msg:{}
    }
  }
 async  componentDidMount(){
   var id=this.props.match.params
this.setState({
  msg:await getDate('/getCourse','post',id)
})
  }
  render() {
    console.log(this.state.msg)
    const {msg}=this.state
    return (
      <div className="detail">
          <Back data/>
          <div className="detail_banner">
            <img src="/img/detail_banner.png" alt=""/>
          </div>
          <h2>早教启蒙</h2>
          <span>500人已买</span>
          <p>{msg.teacher_name}导师<span>主讲</span></p>
          <div className="ftimg">
           <img src="/img/detail_banner02.png" alt=""/>
          </div>
          <div className="brief ">
           <span>{msg.content}</span>
          </div>
          <div className="detail_footer">
            <Link to='/homes/chat' >咨询</Link>
            <Link to="/homes/trysee">试看</Link>
            <Link to={`/homes/play/${msg.price}`}>立即购买<span>{msg.price}</span>元</Link>
          </div>
      </div>
    )
  }
}

export default Detail
