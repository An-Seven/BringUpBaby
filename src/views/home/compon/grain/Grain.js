import React, { Component } from 'react'
import './grain.scss'
import Back from '@/components/back/Back'
import Search from '../../../../components/search/Search';
class Grain extends Component {
  render() {
    return (
      <div>
            <Search data={{title:"五谷杂粮"}}/>
      </div>
    )
  }
}

export default Grain
