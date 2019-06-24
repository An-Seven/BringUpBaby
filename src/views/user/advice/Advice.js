import React, { Component  } from 'react';
import './advice.scss';

class Advice extends Component {
  state = { }
  componentDidMount () {

  }
  render () {
    return (
      <div className="container">
        <header className="header"></header>
        <div className="box">
          <div className="txt">
            <input type='textarea'></input>
          </div>
        </div>
      </div>
    )
  }
}

export default Advice;