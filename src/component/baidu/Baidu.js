import React from 'react'
import fjsonp from 'fetch-jsonp'
import List from './List'
import Pubsub from 'pubsub-js'//订阅发布    先订阅==》》后发布
/* class Bai extends React.Component {
    state = {
        list: [],
        aa: ''
    }
    render() {
        return (<div style={{minHeight: '1rem'}}>
            <input type="text" name='change' value={this.state.aa} onChange={this.serch.bind(this)} />
            <List list={this.state.list}/>
        </div>
        )
    }
    serch(ev) {
        this.setState({
            aa: ev.target.value
        })
        setTimeout(() => {
            fjsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.state.aa,
                {
                    timeout: 1000,
                    jsonpCallback: 'cb',//callback 回调函数key    必须传
                    jsonpCallbackFunction: null
                }).then(res => res.json()).then(data => {
                    console.log(data.s)
                    this.setState({
                        list: data.s
                    })
                })
        },0)

    }
} */

/* 发布 */
class Bai extends React.Component {
    state = {
        aa: ''
    }
    render() {
        return (<div style={{minHeight: '1rem'}}>
            <h1>百度下拉</h1>
            <input type="text" name='change' value={this.state.aa} onChange={this.serch.bind(this)} />
            <List />
        </div>
        )
    }
    serch(ev) {
        this.setState({
            aa: ev.target.value
        })
        setTimeout(() => {
            fjsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + this.state.aa,
                {
                    timeout: 0,
                    jsonpCallback: 'cb',//callback 回调函数key    必须传
                    jsonpCallbackFunction: null
                }).then(res => res.json()).then(data => {
                    console.log(data.s)
                    /* this.setState({
                        list: data.s
                    }) */
                    /* 发布 */
                    Pubsub.publish('subDing',data)
                })
        },0)

    }
}
export default Bai