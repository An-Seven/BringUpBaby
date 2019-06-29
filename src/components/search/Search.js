import React, { Component } from 'react'
import './search.scss'
import Back from '../back/Back'
class Search extends Component {
  state={
    inp:""
  }
  render() {
      let {title}=this.props.data
      //console.log(this.props)
    return (
    <div className='search_top'>
          <Back data={{bc:'#F479A4',title,color:"#fff"}}/>
             <div className="search">
                 <input type="text" placeholder="查查什么能吃"  value={this.state.inp}onChange={this.srarch.bind(this)}/>
             </div>
      </div>
    )
   
  } 
  srarch(ev){
       this.setState({
      inp:ev.target.value
    })
   setTimeout(()=>{
     console.log(this.state.inp)
     this.props.getInp(this.state.inp)
   },0)
      
      
    }
}

export default Search
