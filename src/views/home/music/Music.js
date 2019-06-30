import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from '@/components/back/Back';
import './music.scss'
class Music extends Component {
  render() {
    return (
      <div className="music">
        <div className="bg_img">
          <img className="b_img" src="/img/music/m-bg.png" alt="" />
          <Back data/>
          {/* <img src="/img/music/m-back.png" /> */}
          <div className="description">
            <img className="touxiang" src="/img/music/m-tx.png" alt="" />
            <div className="youce">
              <span className="biaoti">美美摇篮曲</span>
              <p>
                <img src="/img/music/m-ear.png" alt="" />
                <span>9万</span>
                <span>共9首</span>
              </p>
            </div>
          </div>
        </div>
        <div className="music_list">
          <ul>
            <li><span>1</span><span>Great Big Stars 伟大星辰</span></li>
            <li><span>2</span><span>Shenandoah 苏格兰摇篮曲</span></li>
            <li><span>3</span><span>Sleepy head 困困的脑袋</span></li>
            <li><span>4</span><span>The Riddle Song 谜语歌</span></li>
            <li><span>5</span><span>AllyBally 艾丽贝利</span></li>
            <li><span>6</span><span>My Bonnoe</span></li>
            <li><span>7</span><span>baibai 晚安</span></li>
            <li><span>8</span><span>The Water Is Wide 无际的湖水</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Music