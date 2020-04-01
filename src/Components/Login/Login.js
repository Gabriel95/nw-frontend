import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as AuthActions from '../../Store/Actions/auth';

class Login extends React.Component {
  state = {
    loginForm: {
      email: {
        value: '',
        valid: false,
        touched: false
      },
      password: {
        value: '',
        valid: false,
        touched: false
      }
    }
  };

  inputChangeHandler = event => {
    const updatedLoginForm = { ...this.state.loginForm };
    const updatedInput = { ...updatedLoginForm[event.target.id] };
    updatedInput.value = event.target.value;
    updatedInput.touched = true;
    updatedInput.valid = this.checkInputValidity(event);
    updatedLoginForm[event.target.id] = updatedInput;
    this.setState({ loginForm: updatedLoginForm });
  };

  inputBlurHandler = event => {
    const updatedLoginForm = { ...this.state.loginForm };
    const updatedInput = { ...updatedLoginForm[event.target.id] };
    updatedInput.touched = true;
    updatedLoginForm[event.target.id] = updatedInput;
    this.setState({ loginForm: updatedLoginForm });
  };

  checkInputValidity = event => {
    if (event.target.value.trim() === '') return false;

    if (event.target.id === 'email') {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(event.target.value);
    }
    return true;
  };

  getInputClass = input => {
    if (
      !this.state.loginForm[input].valid &&
      this.state.loginForm[input].touched
    )
      return 'form-control is-invalid';
    return 'form-control';
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.loginForm.email.valid ||
      !this.state.loginForm.password.valid
    )
      return;
    this.props.onAuth(
      this.state.loginForm.email.value,
      this.state.loginForm.password.value
    );
  };

  render() {
    return (
      <div className="container mt-5 pt-5">
        <form
          className="w-50 mx-auto p-5 shadow border border-secondary rounded"
          onSubmit={this.handleSubmit}
        >
          <h2 className="text-center">Net Worth Calculator</h2>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className={this.getInputClass('email')}
              onChange={this.inputChangeHandler}
              onBlur={this.inputBlurHandler}
              value={this.state.loginForm.email.value}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={this.getInputClass('password')}
              onChange={this.inputChangeHandler}
              onBlur={this.inputBlurHandler}
              value={this.state.loginForm.password.value}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Sign In
          </button>
          <Link className="btn btn-secondary btn-block" to="/signup">
            Sign Up
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(AuthActions.auth(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
