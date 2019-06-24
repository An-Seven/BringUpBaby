<<<<<<< HEAD
import React from 'react'
import './baby.scss'
class Baby extends React.Component{
  render(){
    return(
      <div className="baby">
        <div className="baby-top">
          <ul>
            <li>身高</li>
            <li>
              <img src="https://iph.href.lu/69x69" alt=""/>
              <p>名字</p>
              {/* <i className="fa fa-spinner fa-pulse"></i> */}
              <p>年龄</p>
            </li>
            <li>体重</li>
          </ul>
        </div>
        <div className="baby-inner">
          <span>第一次</span>
          <span>成长记录</span>
          <span>相册</span>
          <span>亲友团</span>
        </div>
        <div className="baby-list">
          <p><span>今天</span><span>第1天</span></p>
          <ul>
            <li>今天宝宝出生了，长得很漂亮，虽然没有睁眼，但是肯定很大</li>
            <li>身高80cm,体重5kg</li>
            <li>宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没宝长得很漂亮宝宝长得很漂亮宝宝长得很漂</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没有睁眼，但是肯定很大</li>
            <li>身高80cm,体重5kg</li>
            <li>宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮宝宝长得很漂亮</li>
            <li>今天宝宝出生了，长得很漂亮，虽然没宝长得很漂亮宝宝长得很漂亮宝宝长得很漂</li>
          </ul>
        </div>
      </div>
    )
=======
import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    height: state.heightlist,
    touxiang: state.touxiang,
    weight: state.weight,
    age: state.age,
    name: state.name
>>>>>>> 3399581851d0650a7e7741ef174df8e0ce652531
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {
      fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
        dispatch({
          type: 'changeBannerList',
          data
        })
      })
    },
  }
}