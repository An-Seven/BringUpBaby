// 函数式组件
import React from 'react'
import Pubsub from 'pubsub-js'
/* 函数式组件 */
/* export default porps => (
    <ul>
        {porps.list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
        }
    </ul>) */
    class List extends React.Component{
        constructor(){
            super()
            this.state={
                list:[]
            }
            /* 订阅 */
            this.token=Pubsub.subscribe("subDing",(type,data)=>{
                console.log(data,'接收到订阅的消息',type)
                this.setState({list:data.s})
            })
        }
       
        render(){
            return(<ul>
                {this.state.list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
                }
            </ul>)
        }
        componentWillUnmount(){
            /* 取消订阅发布 */
            PubSub.unsubscribe("subDing");
        }
    }
    export default List
