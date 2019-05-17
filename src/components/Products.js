import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import prod1 from '../images/prod1.jpg'
import prod2 from '../images/prod2.jpg'
import prod3 from '../images/prod3.jpeg'
import prod4 from '../images/prod4.jpeg'
import prod5 from '../images/prod5.jpeg'
import prod6 from '../images/prod6.jpeg'
import prod7 from '../images/prod7.jpeg'
import prod8 from '../images/prod8.jpeg'
import prod9 from '../images/prod9.jpeg'


class Product extends Component {
  render() {
    return (
      <div>
          <br/><br/><br/><br/><br/><br/>
        
        <h2 className='heading2'>Company Products</h2>
        <p className='p1'>We maintained and continue to improve a high level of quality in everything we produce by following specific standards. This start from the very initial stage of sourcing raw material to the final stage of finished product.</p>
        <h3 className='heading2'>Made Ups</h3>

        <div className='container'>
        <div className='row'>
       <div className='col-4'> <img src={prod1} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod2} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod3} alt='pic here' width='250px' height='180px'/>  </div>           <div className='col-4'> <img src={prod4} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod5} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod6} alt='pic here' width='250px' height='180px'/> </div>     <div className='col-4'> <img src={prod7} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod8} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod9} alt='pic here' width='250px' height='180px'/></div>
        </div>
        </div>


          </div>
    );
  }
}

export default Product;
