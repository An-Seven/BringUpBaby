import React from 'react'
import './graindetail.scss'
import Back from '@/components/back/Back'
import { getDate } from '@/api';
class Graindetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      data: {}
    }
    this.checkout=this.checkout.bind(this)
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    var obj = await getDate('/getEat')
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].id == id) {
        this.setState({
          data: obj[i],
          title: obj[i].title
        })
      }
    }
    // console.log(this.state.data)
  }
   /* 0不能吃  1能吃   2少吃 3慎吃*/
  checkout(val){
    switch(val){
      case 0:
        return '不能吃';
      case 1:
        return '能吃';
      case 2:
        return '少吃';
      case 3:
        return '慎吃';
      default:
          break;
  }
}
  render() { 
    const { data } = this.state
    console.log(data.dat)
    if(data.dat!==undefined){
    return (
      <div className="graindetail">
        <Back data={{ title: this.state.title, bc: '#F479A4', color: "#fff" }} />
        <img src={data.lg_img} alt="" />
        <div className="detail_name">
          <h2>别名</h2>
          <p>{data.alias}</p>
        </div>
        {data.dat.map((item, index) => {
          return (
            <div className="detail_list" key={index}>
            <h2> {item.name}
            <span>
                <img src={`/icon_img/grain_${item.value}.png`} alt="" />
               { this.checkout(item.value)}
               
                </span>
            </h2>
            <div className='content'>
             {item.content}
                          </div>
          </div> 
          )
        })}
      </div>
    )}else{
      return ''
    }

  }
}

export default Graindetail;
 {/*     <div className="detail_list">
          <h2> 哺乳
          <span>
              <img src="/icon_img/grain_1.png" alt="" />少吃</span>
          </h2>
          <div className='content'>
            处在孕期的您最好不要吃大麦。虽然大麦中含有比
            较丰富的膳食纤维，可刺激肠胃的蠕动，有促进通
            便的作用。但是。一般认为大麦有回奶的作用，可
            能影响您产后哺乳，正在怀孕的您不建议吃大麦，
            尤其是大麦芽。但是，如果偶尔吃了一些，也不要
            过分担心，以后多注意就好。
                        </div>
        </div> */}
