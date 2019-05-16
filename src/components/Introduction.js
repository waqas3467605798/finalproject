import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import infra1 from '../images/infra1.JPG'
import infra2 from '../images/infra2.jpg'
import infra3 from '../images/infra3.jpg'
import infra4 from '../images/infra4.jpeg'
import infra5 from '../images/infra5.jpeg'
import infra6 from '../images/infra6.jpeg'


class Introduction extends Component {
  render() {
    return (
      <div className='div4'>
          <br/><br/><br/><br/><br/><br/>
        <h2 className='heading2'>Company Profile & Infrastructure</h2>
        <p className='p1'>XYZ Textile, one of the leading textile industries having a history of decades, is providing premium quality textiles. It has accomplished a far-fetched by following a strong vow to the clients by giving them top quality products and services. Strong sense to adopt latest technical innovation, having a glance over worldwide vogue in textile industry and giving full fledged dedicated services to the clients is the dynamic key of “XYZ Textile” vertical growth. Company produces complete variety of textiles ranging from grey fabric to highly profiled made-ups. Its export zone has vast borders from Europe, North & South America, Russia & CIS States to Scandinavian countries. Company has achieved the turnover of USD $70 Million per annum since years. “We are the Safe Supplier” signifies Company is transforming this creed into certainty through excellent, skilled and dedicated, 2500+ employees who assure the best availability of products & services in the hands of Clients.</p>
        <div className='container'>
        <div className='row'>

        <div className='col-4'> <img src={infra3} alt='pic here' width='250px' height='180px'/>  <br/><br/>  <img src={infra4} alt='pic here' width='250px' height='180px'/> </div>           <div className='col-4'> <img src={infra1} alt='pic here' width='250px' height='180px'/>  <br/> <br/>  <img src={infra5} alt='pic here' width='250px' height='180px'/> </div>     <div className='col-4'> <img src={infra2} alt='pic here' width='250px' height='180px'/>  <br/> <br/>   <img src={infra6} alt='pic here' width='250px' height='180px'/></div>
        
        </div>
        </div>

        <h2 className='heading2'>Quality Enhancement</h2>
        <p className='p1'>We maintained and continue to improve a high level of quality in everything we produce by following specific standards. This start from the very initial stage of sourcing raw material to the final stage of finished product.</p>
        <h2 className='heading2'>Team Work</h2>
        <p className='p1'> Being a world class Textile house, XYZ Textile upholds that an organization’s success is hinged not only on a great product line-up also on how it selects, trains, and coaches people to undertake higher responsibilities; to nurture talent, and to build leaders of tomorrow. Our export marketing team work passionately to fully entertain all the queries, complaints and questions. We make sure the customer’s satisfaction by provision of services before, during and after purchase </p>
        
          </div>
    );
  }
}

export default Introduction;
