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

export const getAllNetWorthStart = () => {
  return {
    type: ActionTypes.GET_ALL_NETWORTH_START
  };
};

export const getAllNetWorthSuccess = allNetWorths => {
  return {
    type: ActionTypes.GET_ALL_NETWORTH_SUCCESS,
    allNetWorths: allNetWorths
  };
};

export const getAllNetWorthFail = error => {
  return {
    type: ActionTypes.GET_ALL_NETWORTH_FAIL,
    error: error.message
  };
};

export const getAllNetWorth = token => {
  return dispatch => {
    dispatch(getAllNetWorthStart());
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axiosinstance
      .get('/networth/getallnetworths', config)
      .then(response => dispatch(getAllNetWorthSuccess(response.data)))
      .catch(error => dispatch(getAllNetWorthFail(error)));
  };
};

export const deleteNetWorthStart = () => {
  return {
    type: ActionTypes.DELETE_NETWORTH_START
  };
};

export const deleteNetWorthSuccess = () => {
  return {
    type: ActionTypes.DELETE_NETWORTH_SUCCESS
  };
};

export const deleteNetWorthFail = error => {
  return {
    type: ActionTypes.DELETE_NETWORTH_FAIL,
    error: error.message
  };
};

export const deleteNetWorth = (token, netWorthId) => {
  return dispatch => {
    dispatch(deleteNetWorthStart());
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axiosinstance
      .delete('/networth/' + netWorthId, config)
      .then(() => {
        dispatch(deleteNetWorthSuccess());
        dispatch(getCurrentNetWorth(token));
        dispatch(getAllNetWorth(token));
      })
      .catch(error => dispatch(deleteNetWorthFail(error)));
  };
};
