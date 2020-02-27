import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import { Helmet } from 'react-helmet';
 
const Providers = () => {
    return (
        <div class="container-fluid">
        <Helmet>
<title>Vitruvio - Providers Login</title>
</Helmet>
        <form class="formPatient">
        <h2 class="formh2">Login into Your Provider Account</h2>

        <div class="forminput">
       
        <input type="email" className="form-control" placeholder="Username or Email Address" />
    </div>

    <div class="forminput">
    
        <input type="password" className="form-control" placeholder="Password" />
    </div>
    <div>
    <input type="checkbox" className="form-control"/>
    </div>

      
    <a href="#" class="btn btn-success">Log in</a>



       
    </form>
    <h6>Lost your password?| <a href="/register" class="btn">Register</a></h6>
  
    </div>
    );
}
 
export default Providers;