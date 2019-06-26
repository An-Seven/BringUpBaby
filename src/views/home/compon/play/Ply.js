import React, { Component } from 'react'
import Back from '@/components/back/Back';
import './ply.scss'
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';

const RadioItem = Radio.RadioItem;
class Ply extends Component {
    state = {
        value: 0,
      };
      onChange = (value) => {
        console.log(value);
        this.setState({
          value
        });
      };
  render() {
      /* ---------------start------------------ */
    const { value} = this.state;
    const data = [
      { value: 0, label: '支付宝' },
      { value: 1, label: '微信' },
      { value: 2, label: '银联' },
    ];
    /* ----------------end------------------- */
    return (
      <div>
          <Back data={{title:"购买",bc:"#F2F2F2"}}/>
          {/* ------start------------ */}
          <div>
      <List renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
    </div>
          {/* ------end------------ */}
      </div>
    )
  }
}

export default Ply
