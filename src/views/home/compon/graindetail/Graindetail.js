import React from 'react'
import './graindetail.scss'
import Back from '@/components/back/Back'
import { getDate } from '@/api';
class Graindetail extends React.Component {
 
  constructor(props){
    super(props)
    this.state={
      title:"",
      data:[]
    }
  }
 async componentDidMount() {
 const {id}= this.props.match.params
   var obj= await getDate('/getEat')
   for(var i=0;i<obj.length;i++){
     if(obj[i].id==id){
       this.setState({
         data:obj[i],
         title:obj[i].title
       })
     }
   }
   console.log(this.state.data)
  }
  render() {
    const {data}=this.state
    return (
      <div className="graindetail">
       <Back data={{title:this.state.title,bc:'#F479A4',color:"#fff"}}/>
      <img src={data.lg_img} alt=""/>
      <div className="detail_name">
         <h2>别名</h2>
        <p>{data.alias}</p>
      </div>
     
      <div className="detail_list">

        <h2> 哺乳<span><img src="/icon_img/grain_1.png" alt=""/>少吃</span></h2>
      </div>
      </div>
    )
  }
}

export default Graindetail;