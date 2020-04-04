import * as ActionTypes from '../Actions/ActionTypes';
import axiosinstance from '../../axios-nw';
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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: ActionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = localStorage.getItem('expirationDate');
      if (expirationDate <= new Date().getSeconds()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        const currentSeconds = new Date().getTime();
        const newExpiration = expirationDate - currentSeconds;
        dispatch(checkAuthTimeout(newExpiration));
      }
    }
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const body = {
      email: email,
      password: password
    };
    axiosinstance
      .post('/auth', body)
      .then(response => {
        const expiration = jwtDecode(response.data).exp * 1000;
        localStorage.setItem('token', response.data);
        localStorage.setItem('expirationDate', expiration);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(expiration));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const signup = body => {
  return dispatch => {
    dispatch(authStart());
    axiosinstance
      .post('/auth/signup', body)
      .then(response => {
        const expiration = jwtDecode(response.data).exp * 1000;
        localStorage.setItem('token', response.data);
        localStorage.setItem('expirationDate', expiration);
        dispatch(authSuccess(response.data));
        dispatch(checkAuthTimeout(expiration));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};
