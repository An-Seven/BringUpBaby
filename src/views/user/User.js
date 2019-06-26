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
							<Link to='/users/info'>
							<img src="/icon_img/headicon.png"></img>
							</Link>
							<p>小宝妈妈</p>
						</div>
					</div>
					<div className="list">
						<ul>
							<Link to='/users/addbaby'>
								<i className="circle"><img src="/icon_img/u-1.png"/></i>
								<span>添加宝宝</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/vip'>
								<i><img src="/icon_img/u-2.png"/></i>
								<span>会员中心</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/checkins'>
								<i><img src="/icon_img/u-3.png"/></i>
								<span>我的签到</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/course'>
								<i><img src="/icon_img/u-4.png"/></i>
								<span>我的课程</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/collect'>
								<i><img src="/icon_img/u-5.png"/></i>
								<span>我的收藏</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/album'>
								<i><img src="/icon_img/u-6.png"/></i>
								<span>相册定制</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to='/users/advice'>
								<i><img src="/icon_img/u-7.png"/></i>
								<span>意见反馈</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to = '/users/set'>
								<i><img src="/icon_img/u-8.png"/></i>
								<span>通用设置</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
							<Link to = '/users/order'>
								<i><img src="/icon_img/u-9.png"/></i>
								<span>我的订单</span>
								<s><img src="/icon_img/u-j.png"/></s>
							</Link>
						</ul>
					</div>
				</div>
			</div>
				
		)
	}
}
export default User;