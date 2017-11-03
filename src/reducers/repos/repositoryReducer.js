/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  repositories: [],
  apiError: '',
  successListRepos: false,
};

const repository = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_REPOS_USER_REQUEST:
      return {
        ...state,
        apiError: '',
      };
    case types.GET_LIST_REPOS_USER_REQUEST_FAIL:
      return {
        ...state,
        repositories: [],
        apiError: action.error,
        successListRepos: false,
      };
    case types.GET_LIST_REPOS_USER_REQUEST_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        apiError: '',
        successListRepos: true,
      };
    default:
      return state;
  }
};

export default repository;
