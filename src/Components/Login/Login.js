import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as AuthActions from '../../Store/Actions/auth';
import Spinner from '../Spinner/Spinner';

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

  componentDidMount() {
    this.props.tryAuth();
  }

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

  getFormBody = () => {
    if (this.props.loading) return <Spinner />;
    return (
      <div>
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
      </div>
    );
  };

  render() {
    if (this.props.isAuthenticated) return <Redirect to="/" />;
    return (
      <div className="container mt-5 pt-5">
        <form
          className="w-50 mx-auto p-5 shadow border border-secondary rounded"
          onSubmit={this.handleSubmit}
        >
          <img
            src={require('../../pngwave.png')}
            alt=""
            className="mx-auto d-block mb-2"
            style={{ width: '150px', height: '150px' }}
          />
          <h2 className="text-center mb-3">Net Worth Calculator</h2>
          <h5 className="text-center text-danger">{this.props.errorMessage}</h5>
          {this.getFormBody()}
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

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    errorMessage: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(AuthActions.auth(email, password)),
    tryAuth: () => dispatch(AuthActions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
