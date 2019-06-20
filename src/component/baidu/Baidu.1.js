import React from 'react'
import fjsonp from 'fetch-jsonp'
class Bai extends React.Component {
    state = {
        list: [],
        aa: ''
    }
    render() {
        return (<div>
            <input type="text" name='change' value={this.state.aa} onChange={this.serch.bind(this)} />
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
        )
    }
    serch(ev) {
        this.setState({
            aa: ev.target.value
        })
        this.setState((prv) => {
            fjsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + prv.aa,
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
        })

    }
}
export default Bai