import * as ActionTypes from '../Actions/ActionTypes';
import axiosinstance from '../../axios-nw';

export const postNetWorthStart = () => {
  return {
    type: ActionTypes.POST_NETWORTH_START
  };
};

export const postNetWorthSuccess = () => {
  return {
    type: ActionTypes.POST_NETWORTH_SUCCESS
  };
};

export const postNetWorthFail = error => {
  return {
    type: ActionTypes.POST_NETWORTH_FAIL,
    error: error.message
  };
};

export const postNetWorth = (token, body) => {
  return dispatch => {
    dispatch(postNetWorthStart());
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axiosinstance
      .post('/networth', body, config)
      .then(() => dispatch(postNetWorthSuccess()))
      .catch(error => dispatch(postNetWorthFail(error)));
  };
};

export const startForm = () => {
  return {
    type: ActionTypes.START_FORM
  };
};

export const getCurrentNetWorthStart = () => {
  return {
    type: ActionTypes.GET_CURRENT_NETWORTH_START
  };
};

export const getCurrentNetWorthSuccess = currentNetWorth => {
  return {
    type: ActionTypes.GET_CURRENT_NETWORTH_SUCCESS,
    currentNetWorth: currentNetWorth
  };
};

export const getCurrentNetWorthFail = error => {
  return {
    type: ActionTypes.GET_CURRENT_NETWORTH_FAIL,
    error: error.message
  };
};

export const getCurrentNetWorth = token => {
  return dispatch => {
    dispatch(getCurrentNetWorthStart());
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axiosinstance
      .get('/networth/currentnetworth', config)
      .then(response => dispatch(getCurrentNetWorthSuccess(response.data)))
      .catch(error => dispatch(getCurrentNetWorthFail(error)));
  };
};
