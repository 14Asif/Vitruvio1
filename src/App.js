import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Patient from './components/Patients';
import Providers from './components/Providers';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/patients" component={Patient}/>
             <Route path="/providers" component={Providers}/>
             <Route path="/register" component={Register}/>
             <Route component={Error}/>
            
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
