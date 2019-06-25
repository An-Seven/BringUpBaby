import React, { Component } from 'react'
import Back from '@/components/back/Back'
import './zao.scss'
class Zao extends Component {
    render() {
        return (
            <div >
                <Back data={{ bc: "#F479A4", title: "早教启蒙" }} />
                <div className="list">
                    <div className="list_bar">
                        <img src='/img/teacher.png' alt="" />
                        <div className="bar_right">
                            <p>每天一小时，如何提升宝贝...</p>
                            <span>李浩楠讲师</span><br />
                            <span className="bar_last">
                                299元</span>
                        </div>
                    </div>
                    <div className="list_bar">
                        <img src='/img/teacher.png' alt="" />
                        <div className="bar_right">
                            <p>每天一小时，如何提升宝贝...</p>
                            <span>李浩楠讲师</span><br />
                            <span className="bar_last">
                                免费试听</span>
                        </div>
                    </div>



                </div>

            </div>
        )
    }
}

export default Zao;
