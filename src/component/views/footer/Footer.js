import React from 'react'
import {NavLink} from 'react-router-dom'
import './footer.scss'
class Footer extends React.Component{
    render(){
        return( <div className='footer'>
           <NavLink to='/home' activeClassName="active"> <i>1</i>home</NavLink>
           <NavLink to="/tan" activeClassName="active"> <i>2</i>tan</NavLink>
           <NavLink to='/bai' activeClassName="active"> <i>3</i>baidu</NavLink>
           <NavLink to='/async' activeClassName="active"> <i>4</i>async</NavLink>
           </div>
        )
    }
}
export default Footer