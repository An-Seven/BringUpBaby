import React from 'react'
import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar'
import './home.scss'
import { Icon } from 'antd-mobile'
class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            imglist: []
        }
    }
    componentWillMount() {

    }
    render() {
        return (<div className="home" >
            <Navbar />
            <Banner />
            <div className="nav">
                    <a href=""><img src="http://iph.href.lu/50x50" alt=""/>早教启蒙</a>
                    <a href=""><img src="http://iph.href.lu/50x50" alt=""/>家庭教育</a>
                    <a href=""><img src="http://iph.href.lu/50x50" alt=""/>宝宝健康</a>
                    <a href=""><img src="http://iph.href.lu/50x50" alt=""/>生活知识</a> 
                </div>
            {/* 路由下面的卡片 */}
            <div className="center">
          
                <div className="title"> {/* 卡片标题 */}
                    <h3>免费专区</h3><span> 新鲜有趣的内容</span>
                </div>
                <div className="bar">
                    <img src="http://iph.href.lu/100x100?text=bar_img" alt="" />
                    <span>
                        宝宝如何吃得好，这几件事不要做
                </span>
                    <div className="icons">
                        <i className="fa fa-chevron-right fa-2x"></i>
                    </div>
                </div>
                {/* 好课精选 */}
                <div className="title"> {/* 卡片标题 */}
                    <h3>好课精选</h3><span> 总有一款适合你</span>
                </div>
                <div className="bar2">
                    <img src="http://iph.href.lu/100x100?text=bar_img" alt="" />
                    <div className="bar2_right">
                        <p>
                            每天一小时，如何提升宝贝....
                </p>
                        <span>xx讲师</span><br />
                        <span>89.9元</span>
                        <span className="last">
                            免费试听
                </span>
                    </div>
                </div>
                <div className="bar2">
                    <img src="http://iph.href.lu/100x100?text=bar_img" alt="" />
                    <div className="bar2_right">
                        <p>
                            每天一小时，如何提升宝贝....
                </p>
                        <span>xx讲师</span><br />
                        <span>89.9元</span>
                        <span className="last">
                            免费试听
                </span>
                    </div>
                </div>
                {/* --精彩活动-- */}
                <div className="title"> {/* 卡片标题 */}
                    <h3>精彩活动</h3><span> 活动抽奖</span>
                </div>
                <div className="active">
                    <h1>签到积分换会员</h1>
                    <h2>积分换会员</h2>
                    <h3>积分换会员</h3>
                    <div className="icons">
                        <i className="fa fa-chevron-right fa-2x"></i>
                    </div>
                </div>
                <div className='tab'>
                    <span>积分送课程</span>
                    <span>积分送课程</span>
                </div>
                {/* --精彩活动-- */}
                <div className="title"> {/* 卡片标题 */}
                    <h3>热门话题</h3><span> 大家在做什么</span>
                </div>
                <div className="hotsay">
                    热门精选
                </div>
                <div className="hotsay_bar">
                    <p>大家来育儿</p>
                    <div className="bar3">
                        <div className="left">
                            <img src="http://iph.href.lu/27x27" alt="" />
                            <p>铁柱妈妈</p>
                            <span>啦啦啦，长大了小宝
宝，来和大家分享..</span>
                        </div>
                        <div className="right">
                        <img src="http://iph.href.lu/166x90?text=bar_img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Home