import React from 'react';
import axios from 'axios';
import Back from '@/components/back/Back';
import './order.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: '全部' },
  { title: '待付款' },
  { title: '待发货' },
  { title: '待收货' },
];
class Order extends React.Component {
	render() {
    return (
      <div className="Order">
        <Back data={{bc:"#F479A4", title: "我的订单"}} />
        <div className="content">
          <WhiteSpace />
            <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                您暂时还没有订单
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                您暂时还没有未付款订单
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                您暂时还没有待发货订单
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                您暂时还没有待收货订单
              </div>
            </Tabs>
        <WhiteSpace />
        </div>
      </div>
    )
  }
}

export default Order;