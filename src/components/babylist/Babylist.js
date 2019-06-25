import React, { Component } from 'react'
import {getDate} from '@/api'
class Banner extends Component {
    state = {
      babylist:[]
       
      }
     async componentDidMount(){
       this.setState({
         babylist:await getDate('/getBabylist')
       })
      }
  render() {
    return (
      <div>
        {
          this.state.babylist.map((val, index) => {
            return (<li key = { index }> { val.paragraph } </li>)
          })
        }
      </div>
    )
  }
}

export default Banner

