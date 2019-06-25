import React from 'react';
import {Redirect,Route} from 'react-router-dom'
import './user.scss'
import {NavLink,Link} from 'react-router-dom'
class User extends React.Component {
	state = {
		list: []
	}
	render() {
		return (
			<div className="container">
				<header className="header">
					<h4>我的</h4>
				</header>
				<div className="box">
					<div className="info">
						<div className="photo">
							<img src="http://iph.href.lu/56x56"></img>
							<p>小宝妈妈</p>
						</div>
					</div>
					<div className="list">
						<ul>
							<Link to='/users/addbaby'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>添加宝宝</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to='/users/vip'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>会员中心</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to='/users/checkins'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>我的签到</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to='/users/course'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>我的课程</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to='/users/collect'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>我的收藏</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to='/users/advice'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>意见反馈</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
							<Link to = '/users/order'>
								<i><img src="http://iph.href.lu/30x30"/></i>
								<span>我的订单</span>
								<s><img src="http://iph.href.lu/30x30"/></s>
							</Link>
						</ul>
					</div>
				</div>
			</div>
				
		)
	}
}
export default User