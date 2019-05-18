import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import '../App.css'



class Links extends Component {
  render() {
    return (
      <div>
        
          <Link to='/' className='link'> About CEO </Link> 
          <Link to='/introduction' className='link'> Company Introduction</Link>
          <Link to='/product' className='link'>Our Products</Link>
          <Link to='/career' className='link'>Careers</Link>
      </div>
    );
  }
}

export default Links;
