import React from 'react';
 
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar ,Form ,Nav ,FormControl ,} from 'react-bootstrap';
 
const Navigation = () => {
    return (
       <div>
       <Navbar  expand="lg">
       <Navbar.Brand href="/">
       <img
         src={require('../images/logo.png')}
         width="100"
         height="100"
         className="d-inline-block align-top"
         alt="React Bootstrap logo"
   
       />
       </Navbar.Brand>
       

       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="justify-content-end" style={{ width: "100%" ,fontSize:"20px" }}>
           <Nav.Link href="/">Home</Nav.Link>
           <Nav.Link href="/about">About</Nav.Link>
           <Nav.Link href="/contact">Learn More</Nav.Link>
           <Nav.Link href="/patients">Patient</Nav.Link>
           <Nav.Link href="/providers">Providers</Nav.Link>
            
         </Nav>
        
       </Navbar.Collapse>
     </Navbar>
       </div>
    );
}
 
export default Navigation;
