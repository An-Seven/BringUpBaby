import React, { Component } from 'react'
import './trysee.scss'
import Back from '@/components/back/Back'
class Tresee extends Component {
  render() {
    return (
      <div className='trysee'>
         <Back data/>
          <div className="trysee_banner">
            <img src="/img/detail_banner.png" alt=""/>
          </div>
          <h2>共五集</h2>
          <p>试看</p>
          <div className="trysee_list">
             <a >
                 <img src="/icon_img/bo.png" alt=""/>
                 <div className='trysee_list_right'>
                     <span>试看课</span>
                     <span>宝贝计划一</span>
                     <span>06:58</span>
                 </div>
             </a>
             <a >
                 <img src="/icon_img/bo.png" alt=""/>
                 <div className='trysee_list_right'>
                     <span>试看课</span>
                     <span>宝贝计划一</span>
                     <span>06:58</span>
                 </div>
             </a>
             <a href="">
                 <img src="/icon_img/bo.png" alt=""/>
                 <div className='trysee_list_right'>
                     <span>试看课</span>
                     <span>宝贝计划一</span>
                     <span>06:58</span>
                 </div>
             </a>
             <a href="">
                 <img src="/icon_img/bo.png" alt=""/>
                 <div className='trysee_list_right'>
                     <span>试看课</span>
                     <span>宝贝计划一</span>
                     <span>06:58</span>
                 </div>
             </a>
            
          </div>
      </div>
    )
  }
}

export default Tresee
