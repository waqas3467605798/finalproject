import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import Links from './components/Link'
import Ceo from './components/Ceo'
import Introduction from './components/Introduction'
import Product from './components/Products'
import Career from './components/Career'


class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div>
  
    
     <div className='div1'> <h1 className='heading1'><i>XYZ Textile (Pvt) Ltd.</i></h1> <Links/></div>
     <div> <Route exact path='/' component={Ceo} />  <Route path='/introduction' component={Introduction} />  <Route path='/product' component={Product} />  <Route path='/career' component={Career} /> </div>
    
    </div>
    
    

      </BrowserRouter>
    );
  }
}

export default App;
