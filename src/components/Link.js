import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'



class Links extends Component {
  render() {
    return (
      <div>
          <Link to='/ceo'> About CEO </Link> <br/>
          <Link to='/introduction'> Company Introduction </Link> <br/>
          <Link to='/products'> Our Products </Link> <br/>
          <Link to='/contact'> Contact Us </Link> <br/>
      </div>
    );
  }
}

export default Links;
