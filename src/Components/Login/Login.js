import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="container mt-5 pt-5">
        <form className="w-50 mx-auto p-5 shadow border border-secondary rounded">
          <h2 className="text-center">Net Worth Calculator</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
          <button type="button" className="btn btn-secondary btn-block">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
