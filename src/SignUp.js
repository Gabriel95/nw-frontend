import React from 'react';

class SignUp extends React.Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
        <form className="w-75 mx-auto p-5 shadow border border-secondary rounded">
          <h2 className="text-center mb-3">Net Worth Calculator</h2>
          <h4 className="text-center mb-3">Sign Up</h4>
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="form-control"
                />
              </div>
              <div className="col">
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              id="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <button className="btn btn-secondary btn-block">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
