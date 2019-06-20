import React from 'react'
import Banner from '@/components/banner/Banner';
class Home extends React.Component{
    constructor(props){
        super()
        this.state={
            imglist:[]
        }
    }
    componentWillMount(){
       
    }
    render(){
        return(<div className="home" >
                <Banner/>
                {/* 路由下面的卡片 */}
                <div className="center">
                    <div className="title"> {/* 卡片标题 */}
                        <h3>免费专区</h3><span> 新鲜有趣的内容</span>

                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Home