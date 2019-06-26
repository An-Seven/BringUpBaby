import React from 'react'
import './back.scss'
const Back = (props) => {
    /* 使用时可传入参数 data={{
        bc:'#f8f8f8' ,                  需要背景颜色时传入 背景颜色  不传默认没有
        title:'标题名字'                 需要标题时传入title         不传没有
    }}*/
     let {bc,title,color}=props.data;
    return (
        <div className="back_box">
        <div className='back' onClick={() => {
            window.history.go(-1)
        }} style={{ background:bc}}>
            <span className="back_left" style={{ color:color }}><i className='fa fa-angle-left'></i></span>
            {title && <span className="back_center" style={{ color:color }}>{title}</span>}
        </div>
        </div>
    )
}

export default Back
