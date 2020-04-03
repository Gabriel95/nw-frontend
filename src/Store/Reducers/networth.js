import * as ActionTypes from '../Actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
  postNetWorthError: null,
  postNetWorthSuccessMessage: null,
  postNetWorthLoading: false,

  currentNetWorth: null,
  currentNetWorthError: null,
  currentNetWorthLoading: false,

  allNetWorths: [],
  allNetWorthsError: null,
  allNetWorthsLoading: false,
  deleteNetWorthErrorMessage: null,

  netWorthDetail: null,
  netWorthDetailError: null,
  netWorthDetailLoading: false
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

const getCurrentNetWorthStart = (state, action) => {
  return updateObject(state, {
    currentNetWorthLoading: true,
    currentNetWorth: null,
    currentNetWorthError: null
  });
};

const getCurrentNetWorthSuccess = (state, action) => {
  return updateObject(state, {
    currentNetWorthLoading: false,
    currentNetWorth: action.currentNetWorth
  });
};

const getCurrentNetWorthFail = (state, action) => {
  return updateObject(state, {
    currentNetWorthLoading: false,
    currentNetWorthError: action.error
  });
};

const getAllNetWorthStart = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: true,
    allNetWorthsError: null,
    allNetWorths: []
  });
};

const getAllNetWorthSuccess = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: false,
    allNetWorths: action.allNetWorths
  });
};

const getAllNetWorthFail = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: false,
    allNetWorthsError: action.error
  });
};

const deleteNetWorthStart = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: true,
    deleteNetWorthErrorMessage: null
  });
};

const deleteNetWorthSuccess = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: false
  });
};

const deleteNetWorthFail = (state, action) => {
  return updateObject(state, {
    allNetWorthsLoading: false,
    deleteNetWorthErrorMessage: action.error
  });
};

const getNetWorthStart = (state, action) => {
  return updateObject(state, {
    netWorthDetailError: null,
    netWorthDetail: null,
    netWorthDetailLoading: true
  });
};

const getNetWorthSuccess = (state, action) => {
  return updateObject(state, {
    netWorthDetail: action.netWorthDetail,
    netWorthDetailLoading: false
  });
};

const getNetWorthFail = (state, action) => {
  return updateObject(state, {
    netWorthDetailError: action.error,
    netWorthDetailLoading: false
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
    case ActionTypes.GET_CURRENT_NETWORTH_START:
      return getCurrentNetWorthStart(state, action);
    case ActionTypes.GET_CURRENT_NETWORTH_SUCCESS:
      return getCurrentNetWorthSuccess(state, action);
    case ActionTypes.GET_CURRENT_NETWORTH_FAIL:
      return getCurrentNetWorthFail(state, action);
    case ActionTypes.GET_ALL_NETWORTH_START:
      return getAllNetWorthStart(state, action);
    case ActionTypes.GET_ALL_NETWORTH_SUCCESS:
      return getAllNetWorthSuccess(state, action);
    case ActionTypes.GET_ALL_NETWORTH_FAIL:
      return getAllNetWorthFail(state, action);
    case ActionTypes.DELETE_NETWORTH_START:
      return deleteNetWorthStart(state, action);
    case ActionTypes.DELETE_NETWORTH_SUCCESS:
      return deleteNetWorthSuccess(state, action);
    case ActionTypes.DELETE_NETWORTH_FAIL:
      return deleteNetWorthFail(state, action);
    case ActionTypes.GET_NETWORTH_START:
      return getNetWorthStart(state, action);
    case ActionTypes.GET_NETWORTH_SUCCESS:
      return getNetWorthSuccess(state, action);
    case ActionTypes.GET_NETWORTH_FAIL:
      return getNetWorthFail(state, action);
    default:
      return state;
  }
};

export default reducer;
