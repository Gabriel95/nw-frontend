import * as ActionTypes from '../Actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
  postNetWorthError: null,
  postNetWorthSuccessMessage: null,
  postNetWorthLoading: false
};

const postNetWorthStart = (state, action) => {
  return updateObject(state, {
    postNetWorthLoading: true,
    postNetWorthError: null,
    postNetWorthSuccessMessage: null
  });
};

const postNetWorthSuccess = (state, action) => {
  return updateObject(state, {
    postNetWorthLoading: false,
    postNetWorthSuccessMessage: 'Net worth saved!'
  });
};

const postNetWorthFail = (state, action) => {
  return updateObject(state, {
    postNetWorthLoading: false,
    postNetWorthError: action.error
  });
};

const startForm = (state, action) => {
  return updateObject(state, {
    postNetWorthError: null,
    postNetWorthSuccessMessage: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.POST_NETWORTH_START:
      return postNetWorthStart(state, action);
    case ActionTypes.POST_NETWORTH_SUCCESS:
      return postNetWorthSuccess(state, action);
    case ActionTypes.POST_NETWORTH_FAIL:
      return postNetWorthFail(state, action);
    case ActionTypes.START_FORM:
      return startForm(state, action);
    default:
      return state;
  }
};

export default reducer;
