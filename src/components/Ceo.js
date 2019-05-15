import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ceo from '../images/ceo.gif'



class Ceo extends Component {
  render() {
    return (
      <div className='div2'>
           <br/><br/><br/><br/><br/><br/>
        
        <h1 className='heading2'>CEO Message</h1>
        <p className='p1'> <img src={ceo} alt='pic here' align='left'/> “Competing a victorious journey of 20 years in Textile manufacturing is the one thing in my life I mark not as success, but rather a way to success. XYZ Textile  was started with the notion to become the very first choice of customers in all aspects in the world of Textile. With my diligent team, I have achieved a level greater than our targeted plan in a significantly lesser time but “the top is always vacant”, and we are still in search of best of the best with 100% client’s satisfaction. We have a strong belief & transparent prophecy for quality which has urged me and my efficient team to set up premium & authentic standards of quality. We, “XYZ Textile ” devote much of our efforts & attention to improve & maintain the quality standards of our inimitable range of products. We have taken practical steps by setting up a specific quality assurance department fully devoted to monitor & review each process at all stages. All of my team’s involvement & attention at each phase keeps all the processes being performed with optimum efficiency & high morale. I promise you not only to keep the quality maintained but also to achieve a higher level up to our client’s provisions.”</p>
        <br/>
        <div className='div3'> <br/> <b>Head Office:</b> <p>Kashmir Road, Faisalabad, Pakistan. </p> <b>Mills: </b> <p>3-Kilo meter, jhumra Road, khurrianwala, Faisalabad <br/> <b>Contact:</b> 92346xxxxxxxx <br/> <b>E-mail:</b> xxxyyz@xyz.com <br/> <br/></p> </div>

      </div>
    );
  }
}

export default Ceo;
