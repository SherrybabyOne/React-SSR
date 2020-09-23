import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './layout.scss';

class Index extends React.Component{
  constructor(props){
  super(props);
  }
  
  render(){
    return  (
      <div className='layout-box'>
        <NavLink to="/index" style={{ marginLeft: "10px" }} >首页</NavLink>
        <NavLink style={{ marginLeft: "10px" }} onClick={this.click}  to="/list">列表页</NavLink>
        <NavLink to="/about" style={{ marginLeft: "10px" }} >关于</NavLink>
        {this.props.children}
      </div>
    )
  }
}
//带入路由信息
export default withRouter(Index);