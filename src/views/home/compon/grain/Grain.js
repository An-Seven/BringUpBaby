import React, { Component } from 'react'
import './grain.scss'
import Search from '@/components/search/Search';
import {getDate} from '@/api/index'
class Grain extends React.Component {
constructor(props){
  super(props)
  this.state = {
    data:[]
  }
  this.toDetail.bind(this)
}
  toDetail(val){
    console.log(val)
     this.props.history.push('/homes/graindetail/'+val)
  }
 async componentDidMount(){
this.setState({
  data:await getDate('/getEat')
})
  }
  /* 0不能吃  1能吃   2少吃 */
  render() {
    return (
    <div className='grain'>
      <Search data={{title:'五谷杂粮'}} getInp={this.getInp}/>

        {this.state.data.map(item=>{
          return (
            <div className="grain_card" key={item.id} onClick={()=>{
              this.props.history.push('/homes/graindetail/'+item.id)
            }}>
          <h2>{item.title}</h2>
          <div className="grain_r">
            <img src={item.sm_img} alt=""/>
          </div>
          <div className="grain_l">
            {
              item.type.map((ite,ind)=>{
                return(
                  <span key={ind}><img src={`/icon_img/grain_${ite.value}.png` }alt=""/>{ite.name}</span>
                )
              })
            }
              {/* <span><img src="/icon_img/孕妇.png" alt=""/>孕妇</span>
              <span><img src="/icon_img/孕妇.png" alt=""/>坐月子</span>
              <span><img src="/icon_img/孕妇.png" alt=""/>哺乳</span>
              <span><img src="/icon_img/孕妇.png" alt=""/>婴儿</span> */}
          </div>
      </div> 
          )
        })
        }
    </div>
    );
  } 
  getInp(val){
    console.log(val,'子传的数据')
  }
}

export default Grain;