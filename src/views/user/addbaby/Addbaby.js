import React from 'react';
import './addbaby.scss'
import Back from '../../../components/back/Back';
class Addbaby extends React.Component {
	state = {
		list: []
  }
  componentDidMount(){
	}
	render() {return (
    
      <div>
        <Back data={{bc:1,title:"123"}}/>
        </div>
    )
  }
}

export default Addbaby;