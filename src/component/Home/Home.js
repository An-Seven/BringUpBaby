import React from 'react'
import { Button, WhiteSpace } from 'antd-mobile';
import Banner from '../Banner/Banner.js'
class Home extends React.Component{
    constructor(props){
        super()
        this.state={
            list:[
                {id:1,name:'小明',content:'天气怎么样'},
                {id:2,name:'小红',content:'天气怎么样222'}
            ],
            inpname:'',
            inpcontent:'',
            inplist:[
                {id:1,name:'小明2',content:'天气怎么样111'},
                {id:2,name:'小红3',content:'天气怎么样222'}
            ]
        }
        this.add=this.add.bind(this)
        this.add2=this.add2.bind(this)
        this.change=this.change.bind(this)
      }

render(){
    return(
    <div className='home'>
       <Banner/>
        <h2>留言板---操作dom</h2>
        <input type="text" ref='name'/>
        <input type="text" ref='content'/>
        <input type="button" value='提交' onClick={this.add}/>
        <ul>
        {this.state.list.map(item=>{
                return <li key={item.id} ><span>{item.content}</span><em>{item.name}</em></li>
            })  
        }
        </ul>
        <h2>留言板---操作数据</h2>
        <input type="text" ref='inpname'  name="inpname" value={this.state.inpname} onChange={this.change}/>
        <input type="text" name='inpcontent' value={this.state.inpcontent} onChange={this.change}/>
        <input type="button" value='提交' onClick={this.add2}/>
        <ul>
            {
                this.state.inplist.map(item=>{
                    return <li key={item.id}><span>{item.content}-----</span><em>{item.name}</em></li>
                })
            }
        </ul>
    </div>  
)
    }
    add(){
        console.log(1) 
        if(this.refs.name.value.length==0||this.refs.content.value.length==0){
           alert('输入为空')
        }else{
            this.setState({
                list:this.state.list.concat({
                    id:this.state.list.length+1,
                name:this.refs.name.value,
                content:this.refs.content.value 
                })
            })
        }
        this.refs.name.value=this.refs.content.value=''
    }
    change(ev){
        //console.log(ev.target.name)
        //console.log(ev.target.value)
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    add2(){
let arr=[...this.state.inplist]
arr.push({
    id:this.state.inplist.length+1,
    name:this.state.inpname,
    content:this.state.inpcontent
})
this.setState({
    inplist:arr,inpcontent:'',inpname:''
})
this.refs.inpname.focus()
    }
}
export default Home