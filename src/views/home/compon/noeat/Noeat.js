import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Back from '@/components/back/Back';
import './noeat.scss'
import {getDate} from '@/api'
class Noeat extends Component {
  state={
    list:[]
  }
  async componentDidMount(){
      this.setState({
        list:await getDate('/getNoeat')
      })
  }
  render() {
    return (
      <div className="noeat">
        <div className='noeat_top'>
          <Back data={{bc:'#F479A4',title:'能不能吃',color:"#fff"}}/>
             <div className="search">
                 <input type="text" placeholder="查查什么能吃"/>
             </div>
          </div>
             <div className="noeat_box">
                 {
                   this.state.list.map(item=>{
                     return(
                      <Link to="/homes/grain" key={item.id}><img src={item.img} alt=""/><span>{item.title}</span></Link>
                     )
                   })
                 }

             </div>
      </div>
    )
  }
}

export default Noeat
