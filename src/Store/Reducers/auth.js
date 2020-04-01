import * as ActionTypes from '../Actions/ActionTypes';
import { updateObject } from '../utility';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  userId: null,
  error: null,
  firstname: null,
  lastname: null,
  email: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  const jwt = jwtDecode(action.token);
  return updateObject(state, {
    token: action.token,
    userId: jwt.jti,
    firstname: jwt.sub,
    lastname: jwt.lastname,
    email: jwt.email,
    loading: false,
    error: null
  });
};

const authFail = (state, action) => {
  const error = action.error.response;
  let errorMessage = 'Server Error';
  if (error) {
    if (error.status === 404) {
      errorMessage = 'Incorrect email or password';
    } else if (error.status === 400) {
      errorMessage = error.data;
    } else if (error.data.status === 400) {
      if (error.data.errors) errorMessage = 'Email and password required';
    }
  }
  return updateObject(state, { error: errorMessage, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_START:
      return authStart(state, action);
    case ActionTypes.AUTH_SUCCESSS:
      return authSuccess(state, action);
    case ActionTypes.AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
