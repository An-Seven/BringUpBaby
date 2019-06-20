import React from 'react'
import './a.scss'
import {Button} from 'antd-mobile'
class Tan extends React.Component {
    state = {
        bl: false,
        left:0
    };
    render() {
        return (
            <div className='tan'>
                <Button loading onClick={() => { this.setState({ bl: !this.state.bl }) }}>on||off显示隐藏</Button>
            {this.state.bl && <div className='a'>123123</div>}
            <Button type="warning" onClick={()=>{
                this.setState({ left:this.state.left+10
            })}}>移动</Button>
            <div className='box' style={{left:this.state.left+'px'}}>
                yodong
            </div>
            </div>

        )
    }
}
export default Tan