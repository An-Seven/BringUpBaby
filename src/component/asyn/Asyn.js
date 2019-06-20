import React, { Component } from 'react'
import axios from 'axios'
import fetchjs from 'fetch-jsonp'
import { Button } from 'antd-mobile'
class Async extends React.Component {
    constructor(props) {
        super()
        this.state = {
            list: []
        }
        //this.get_axios()
        //this.get_fetch()
    }
    render() {
        return (
            <div style={{display:'flex',flexDirection:'column'}}>
                <Button loading type="warning" onClick={() => { this.get_axios()}}>加载数据</Button>
                {
                    this.state.list.map((item, index) => {
                        return <div key={index}>
                            <img   src={item.pic} />
                        </div>
                        
                    })
                }
                 <Button  type="warning" onClick={() => {this.get_jsonp()}}>json</Button>
            </div>
        )
    }
    get_axios() {
        console.log(1)
        axios({
            // url: 'http://www.daxunxun.com/douban',
            url:'/mobileWeb/newHomepage3',
        }).then(res => {
            res=res.data.info.banner
            this.setState({
                list: res
            })
        })
    }
    get_fetch(){
        fetch('http://www.daxunxun.com/douban').then(res=>res.json()).then(res=>{
            console.log(res)
        })
    }
    get_jsonp(){
        console.log(123)
    fetchjs(
            'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=美国',
            {timeout: 1000,
            jsonpCallback: 'cb',//callback 回调函数key    必须传
            jsonpCallbackFunction: null}
        ).then(res=>res.json()).then(data=>console.log(data)) 
    }
}
export default Async 