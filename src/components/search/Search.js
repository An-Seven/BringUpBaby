import React, { Component } from 'react'
import './search.scss'
import Back from '../back/Back'
class Search extends Component {
  render() {
      let {title}=this.props.data
      console.log(this.props)
    return (
    <div className='search_top'>
          <Back data={{bc:'#F479A4',title,color:"#fff"}}/>
             <div className="search">
                 <input type="text" placeholder="查查什么能吃"/>
             </div>
      </div>
    )
  }
}

export default Search
