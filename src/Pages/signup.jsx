import React from "react";

function Signup() {
  return (
    <div className="container" style={{ maxWidth: "600px", marginTop: "50px" }}>
      <h2 className="mb-4">Sign Up</h2>
      <form className="row g-3">
       
        <div className="col-12">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="firstName" />
        </div>

        <div className="col-12">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

  
        <div className="col-md-6">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input type="tel" className="form-control" id="mobile" placeholder="123-456-7890" />
        </div>

        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control" id="date" />
        </div>

       
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
