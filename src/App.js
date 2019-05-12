import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Links from './components/Link'


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div>
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-sm-3'> <Links /> </div>       <div className='col-sm-9'>   <div className='div1'> <i>XYZ Textile (Pvt) Ltd.</i> </div>    </div>
    </div>
    </div>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
