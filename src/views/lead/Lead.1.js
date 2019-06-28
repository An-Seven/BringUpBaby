import React from 'react'
import './lead.scss'
class Lead extends React.Component {
    constructor(props){
        super(props)
        this.state={
                num:1
        }
    }
    componentDidMount(){
        setInterval(() => {
           this.setState({
               num:(this.state.num++)%3
           })
          console.log((this.state.num++)%3)
       },5000)
}
    
  render() {
    return (
     <div className={`lead b${this.state.num}`}>
        
      </div>
    )
  }
}

export default Lead
