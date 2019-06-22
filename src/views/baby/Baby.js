import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    height: state.heightlist,
    touxiang: state.touxiang,
    weight: state.weight,
    age: state.age,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {
      fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
        dispatch({
          type: 'changeBannerList',
          data
        })
      })
    },
  }
}