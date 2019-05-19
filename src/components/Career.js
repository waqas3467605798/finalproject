import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'



class Career extends Component {

  formHandler = ()=> (
    alert('Your Form has been submitted. We will entertain you as the availability of Vacancy.... Thnaks. ')
  )

  render() {
    return (
      <div className='div4'>
          <br/><br/><br/><br/><br/>
       
          <h2 className='heading2'>Why Choose Us</h2>
        <p className='p1'>We are equal opportunity providers, who always encourage the potential and dedicated candidates. We cares deeply to make the workplace more comfortable and pleasant for everyone.Providing platform and always encourage young candidates to work with new strategies and give them advises and opportunities to improve themselves.</p>
       <h2 className='heading2'>Apply Here</h2>

      
      <div className='container'>
      <div className='row'>
      <div className='col-3'></div>
      <div className='col-7'>
      <form>
         <table>
          <tr>  <td>Your Name</td>  <td> <input type='text' placeholder='Name as per CNIC'/> </td>  </tr>
          <tr>  <td>Father Name</td>  <td> <input type='text' placeholder='Father Name'/> </td>  </tr>
          <tr>  <td>CNIC Number</td>  <td> <input type='text' placeholder='xxxxx-xxxxxxx-x'/> </td>  </tr>
          <tr>  <td>Domicile</td>  <td> <input type='text' placeholder='Province/City'/> </td>  </tr>
          <tr>  <td>Date of Birth</td>  <td> <input type='text' placeholder='dd/mm/yyyy'/> </td>  </tr>
          <tr>  <td>Mobile Number</td>  <td> <input type='text' placeholder='923xxxxxxxxx'/> </td>  </tr>
          <tr>  <td>Mailing Address</td>  <td> <input type='text' placeholder='Home Address'/> </td>  </tr>
          <tr>  <td>Gender</td>  <td> <input type='radio' name='gender' value='male'/>Male <input type='radio' name='gender' value='female'/>Female </td>  </tr>
          <tr>  <td>Qualification</td>  <td> <input type='text' placeholder='Latest Degree Name'/> </td>  </tr>
          <tr>  <td>Marks Obtained</td>  <td> <input type='text' placeholder='Marks Obtained'/> </td>  </tr>
          <tr>  <td>Percentage/CGP</td>  <td> <input type='text' placeholder='%'/> </td>  </tr>
          <tr>  <td>Post Applied For</td>  <td> <input type='text' placeholder='Department Name'/> </td>  </tr>
          <tr>  <td>Experience</td>  <td> <input type='text' placeholder='Experience in Years'/> </td>  </tr> <br/>
          <tr>  <td></td>  <td>  <button onClick={this.formHandler} className='btn1'>Submit</button></td>  </tr>
         </table>

       </form>
      </div>
      <div className='col-2'></div>
      </div>
       </div>    
       <br/> <br/>
       <h1 className='heading2'>OR</h1>  
       <h5 className='heading2'>E-mail your C.V at </h5>  
       <h6 className='heading2'>hr@xyz.com </h6>

<br/> <br/>

<div className='div3'> <br/> <b>Head Office:</b> <p>Kashmir Road, Faisalabad, Pakistan. </p> <b>Mills: </b> <p>3-Kilo meter, jhumra Road, khurrianwala, Faisalabad <br/> <b>Contact:</b> 92346xxxxxxxx <br/> <b>E-mail:</b> xxxyyz@xyz.com <br/> <br/></p> </div>
          </div>
    );
  }
}

export default Career;


       