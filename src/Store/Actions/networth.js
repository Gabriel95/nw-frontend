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
      .then(() => {
        dispatch(postNetWorthSuccess());
      })
      .catch(error => dispatch(postNetWorthFail(error)));
  };
};
