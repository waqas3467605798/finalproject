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
import fab1 from '../images/fab1.jpg'
import fab2 from '../images/fab2.jpeg'
import fab3 from '../images/fab3.jpeg'
import fab4 from '../images/fab4.jpeg'
import fab5 from '../images/fab5.jpeg'
import fab6 from '../images/fab6.jpeg'
import fab7 from '../images/fab7.jpeg'
import fab8 from '../images/fab8.jpeg'
import fab9 from '../images/fab9.jpeg'



class Product extends Component {
  render() {
    return (
      <div className='div4'>
          <br/><br/><br/><br/><br/><br/>
        
        <h2 className='heading2'>Company Products</h2>
        <p className='p1'>We maintained and continue to improve a high level of quality in everything we produce by following specific standards. This start from the very initial stage of sourcing raw material to the final stage of finished product.</p>
        <h3 className='heading2'>Made Ups</h3>

        <div className='container'>
        <div className='row'>
       <div className='col-4'> <img src={prod1} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod2} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod3} alt='pic here' width='250px' height='180px'/>  </div>           <div className='col-4'> <img src={prod4} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod5} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod6} alt='pic here' width='250px' height='180px'/> </div>     <div className='col-4'> <img src={prod7} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={prod8} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={prod9} alt='pic here' width='250px' height='180px'/></div>
        </div>
        </div>

<br/>
        <h2 className='heading2'>Fabrics</h2>

        <div className='container'>
        <div className='row'>
       <div className='col-4'> <img src={fab1} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={fab2} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={fab3} alt='pic here' width='250px' height='180px'/>  </div>           <div className='col-4'> <img src={fab4} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={fab5} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={fab6} alt='pic here' width='250px' height='180px'/> </div>     <div className='col-4'> <img src={fab7} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={fab8} alt='pic here' width='250px' height='180px'/>   <br/><br/>  <img src={fab9} alt='pic here' width='250px' height='180px'/></div>
        </div>
        </div>

      <br/><br/>
        <div className='div3'> <br/> <b>Head Office:</b> <p>Kashmir Road, Faisalabad, Pakistan. </p> <b>Mills: </b> <p>3-Kilo meter, jhumra Road, khurrianwala, Faisalabad <br/> <b>Contact:</b> 92346xxxxxxxx <br/> <b>E-mail:</b> xxxyyz@xyz.com <br/> <br/></p> </div>
          </div>
    );
  }
}

export default Product;
