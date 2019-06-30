import React, { Component } from 'react'
import Back from '@/components/back/Back';
import './ply.scss'
import { List, Radio} from 'antd-mobile';

const RadioItem = Radio.RadioItem;
class Ply extends Component {
  state = {
    value: 0,
  };
  
  render() {
    /* ---------------start------------------ */
    const { value } = this.state;
    const data = [
      { value: 0, label: '钱包' },
      { value: 1, label: '支付宝' },
      { value: 2, label: '微信' },
      { value: 3, label: '银联在线支付' },
    ];
    /* ----------------end------------------- */
    return (
      <div>
        <Back data={{ title: "购买", bc: "#F2F2F2",color:"#000" }} />
        {/* ------start------------ */}
        <div className="ply">
          <div className="money">
           <p>需支付</p>
           <p>99.90</p>
           <p><span onClick={this.toorder.bind(this)}>订单详情<i className="fa fa-angle-right"></i></span></p>
            </div>
          <List>
            {data.map(i => (
              <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                {i.label}
              </RadioItem>
            ))}
          </List>
          <p className="last_play" onClick={this.pay.bind(this)}>确认支付</p>
        </div>
        {/* ------end------------ */}
      </div>
    )
  }
pay(){
  var str=''
  switch(this.state.value){
    case 0:
      str="钱包";
        break;
    case 1:
      str="支付宝";
        break;
    case 2:
        str="微信";
        break;
    case 3:
        str="银联在线支付";
        break;
    default:
        return;
  }
  console.log(str+"-------支付成功")
}
onChange = (value) => {
  // console.log(value);
  this.setState({
    value
  });
};
toorder(){
  console.log('跳转订单页')
}

}

export default Ply
