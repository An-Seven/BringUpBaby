import React from 'react'
import Banner from '@/components/banner/Banner';
import Navbar from '@/components/navbar/Navbar'
import './home.scss'
import { Icon } from 'antd-mobile'
import { getDate } from '../../api';
class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            course: [],
            hotlist:[]
        }
    }
   async componentWillMount() {
        this.setState({
            course:await getDate('/getCourse'),
            hotlist:await getDate('/getHot')
        })
    }
    render() {
        return (<div className="home" >
            <Navbar />
            <Banner />
           
            {/* 路由下面的卡片 */}

            <div className="center">
            <div className="nav">
                    <a href=""><img src="/icon_img/1.png" alt=""/>早教启蒙</a>
                    <a href=""><img src="/icon_img/2.png" alt=""/>家庭教育</a>
                    <a href=""><img src="/icon_img/1.png" alt=""/>宝宝健康</a>
                    <a href=""><img src="/icon_img/4.png" alt=""/>生活知识</a> 
                </div>
                <div className="title"> {/* 卡片标题 */}
                    <h3>免费专区</h3><span> 新鲜有趣的内容</span>
                </div>
                <div className="bar" style={{marginBottom:'.32rem'}}>
                    <img src="/icon_img/free.png" alt="" />
                    <span >
                        宝宝如何吃得好，这几件事不要做
                </span>
                    <div className="icons">
                        <img src="/icon_img/jian.png" alt=""/>
                    </div>
                </div>
                {/* 好课精选 */}
                <div className="title"> {/* 卡片标题 */}
                    <h3>好课精选</h3><span> 总有一款适合你</span>
                </div>

               {
                   this.state.course.map(item=>{
                       return(
                        <div className="bar2" key={item.id}>
                        <img src={item.small_img} alt="" />
                        <div className="bar2_right">
                            <p>{item.title}</p>
                            <span>{item.teacher_name}讲师</span><br />
                            <span>{item.price.price}元</span>
                            <span className="last">
                                免费试听
                    </span>
                        </div>
                    </div>
                       )
                   })
               }
                {/* --精彩活动-- */}
                <div className="title" style={{marginTop:".4rem"}}> {/* 卡片标题 */}
                    <h3>精彩活动</h3><span> 活动抽奖</span>
                </div>
                <div className="active">
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
                   {
                       this.state.hotlist.map(item=>{
                           return(
                            <div className="hotsay_bar" key={item.id}>
                            <p>{item.title}</p>
                            <div className="bar3">
                                <div className="left">
                                    <img src={item.photo} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.say}</p>
                                </div>
                                <div className="right">
                                <img src={item.img} alt="" />
                                </div>
                            </div></div>
                           )
                       })
                   }

                
            </div>
        </div>
        )
    }
}
export default Home