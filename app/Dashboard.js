import React, { Component } from 'react';
import { Link } from 'react-router';

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>

        <Link to='/'> HOME </Link>
          <br />
        <Link to='/greeting'> GREETING </Link>
          <br />
        <Link to='/goodbye'> GOODBYE </Link>
          <br />
        <Link to='/custom'> CUSTOM GREETING </Link>
        { this.props.children }
      </div>
    )
  }
}

export default Dashboard;
