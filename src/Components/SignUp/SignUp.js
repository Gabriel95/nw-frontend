import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { Redirect, Link } from 'react-router-dom';
import * as Actions from '../../Store/Actions/auth';

class SignUp extends React.Component {
  state = {
    signupForm: {
      email: { value: '', valid: false, touched: false },
      password: { value: '', valid: false, touched: false },
      confirmpassword: { value: '', valid: false, touched: false },
      firstname: { value: '', valid: false, touched: false },
      lastname: { value: '', valid: false, touched: false }
    }
  };

  componentDidMount() {
    this.props.tryAuth();
  }

  inputChangeHandler = event => {
    const updatedSignUpForm = { ...this.state.signupForm };
    const updatedInput = { ...updatedSignUpForm[event.target.id] };
    updatedInput.value = event.target.value;
    updatedInput.touched = true;
    updatedInput.valid = this.checkInputValidity(event);
    updatedSignUpForm[event.target.id] = updatedInput;
    this.setState({ signupForm: updatedSignUpForm });
  };

  inputBlurHandler = event => {
    const updatedSignUpForm = { ...this.state.signupForm };
    const updatedInput = { ...updatedSignUpForm[event.target.id] };
    updatedInput.touched = true;
    updatedSignUpForm[event.target.id] = updatedInput;
    this.setState({ signupForm: updatedSignUpForm });
  };

  checkInputValidity = event => {
    if (event.target.value.trim() === '') return false;

    if (event.target.id === 'email') {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(event.target.value);
    }

    if (event.target.id === 'confirmpassword') {
      if (event.target.value !== this.state.signupForm.password.value)
        return false;
    }

    return true;
  };

  getInputClass = input => {
    if (
      !this.state.signupForm[input].valid &&
      this.state.signupForm[input].touched
    )
      return 'form-control is-invalid';
    return 'form-control';
  };

  handleSubmit = event => {
    event.preventDefault();
    for (let key in this.state.signupForm) {
      if (!this.state.signupForm[key].valid) return;
    }
    const body = {
      Password: this.state.signupForm.password.value,
      Email: this.state.signupForm.email.value,
      FirstName: this.state.signupForm.firstname.value,
      LastName: this.state.signupForm.lastname.value,
      ConfirmPassword: this.state.signupForm.confirmpassword.value
    };
    this.props.signup(body);
  };

  getFormBody = isLoading => {
    if (isLoading) return <Spinner />;
    return (
      <div>
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                id="firstname"
                type="text"
                className={this.getInputClass('firstname')}
                placeholder="First name"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler}
                value={this.state.signupForm.firstname.value}
              />
            </div>
            <div className="col">
              <input
                id="lastname"
                type="text"
                className={this.getInputClass('lastname')}
                placeholder="Last name"
                onChange={this.inputChangeHandler}
                onBlur={this.inputBlurHandler}
                value={this.state.signupForm.lastname.value}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={this.getInputClass('email')}
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler}
            value={this.state.signupForm.email.value}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={this.getInputClass('password')}
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler}
            value={this.state.signupForm.password.value}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            id="confirmpassword"
            placeholder="Confirm Password"
            className={this.getInputClass('confirmpassword')}
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler}
            value={this.state.signupForm.confirmpassword.value}
          />
        </div>
      </div>
    );
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container my-5 pt-5">
        <form
          className="w-75 mx-auto p-5 shadow border border-secondary rounded"
          onSubmit={this.handleSubmit}
        >
          <img
            src={require('../../pngwave.png')}
            alt=""
            className="mx-auto d-block mb-2"
            style={{ width: '150px', height: '150px' }}
          />
          <h2 className="text-center mb-3">Net Worth Calculator</h2>
          <h4 className="text-center mb-3">Register</h4>
          <h5 className="text-center text-danger mb-3">
            {this.props.errorMessage}
          </h5>
          {this.getFormBody(this.props.loading)}
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <Link className="btn btn-secondary btn-block" to="/login">
            Sign In
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
    tryAuth: () => dispatch(Actions.authCheckState()),
    signup: body => dispatch(Actions.signup(body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
