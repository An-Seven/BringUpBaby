import React from 'react'
import './back.scss'
const Back = (props) => {
    /* 使用时可传入参数 data={{
        bc:'#f8f8f8' ,                  需要背景颜色时传入 背景颜色  不传默认没有
        title:'标题名字'                 需要标题时传入title         不传没有
    }}*/
     let {bc,title}=props.data;
    return (
        <div className='back' onClick={() => {
            window.history.go(-1)
        }} style={{ background:bc ? bc : '' }}>
            <span className="back_left"><i className='fa fa-angle-left fa-3x'></i></span>
            {title && <span className="back_center">{title}</span>}
        </div>
    )
}

export default Back
