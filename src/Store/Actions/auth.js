import * as ActionTypes from '../Actions/ActionTypes';
import axiosintace from '../../axios-nw';
import jwtDecode from 'jwt-decode';

export const authStart = () => {
  return {
    type: ActionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: ActionTypes.AUTH_SUCCESSS,
    token: token
  };
};

export const authFail = error => {
  return {
    type: ActionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const body = {
      email: email,
      password: password
    };
    axiosintace
      .post('/auth', body)
      .then(response => {
        const expiration = jwtDecode(response.data).exp * 1000;
        localStorage.setItem('token', response.data);
        localStorage.setItem('expirationDate', expiration);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};
