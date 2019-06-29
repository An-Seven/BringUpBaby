import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from '@/components/back/Back';
import './bofang.scss';
class Bofang extends Component {
  render() {
    return (
      <div className="bofang">
        <header>
          <Back data/>
          <span>Great Big Stars 伟大星辰</span>
          <span>美美摇篮曲</span>
        </header>
        
      </div>
    )
  }
}

export default Bofang;