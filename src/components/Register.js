import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Register = () => {
    return (
        
        <form>
                <h3>Register</h3>
                <div className="form-group col-6">
                <label>Name</label>
                <input type="email" className="form-control " placeholder="Enter Name" />
            </div>
                <div className="form-group col-6">
                    <label>Email</label>
                    <input type="email" className="form-control " placeholder="Enter Email ID" />
                </div>

                <div className="form-group col-6">
                    <label>Password</label>
                    <input type="password" className="form-control " placeholder="Enter password" />
                </div>
                <div class="form-group col-6">
  <label for="sel1">Type:</label>
  <select class="form-control" id="sel1">
    <option>Pharmacy</option>
    <option>Physiotheraphy</option>
    <option>Chiropractor</option>
    <option>Naturopath</option>
    <option>Counselling</option>
    <option>Chiropodist/podiatrist</option>
    <option>Dietician</option>
    <option>Speech Language Pathologist</option>
    <option>Dentist</option>
  </select>
</div>

              

                <button type="submit" className="btn btn-primary ">Submit</button>&nbsp;
                <button type="submit" className="btn btn-primary ">Register</button>
               
            </form>
    );
}
 
export default Register;