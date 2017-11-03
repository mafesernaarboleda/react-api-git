/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import repositoryApi from '../../api/repository';

export function getListReposByUserRequest() {
  return {
    type: types.GET_LIST_REPOS_USER_REQUEST,
  };
}

export function getListReposByUserRequestFail(error) {
  return {
    type: types.GET_LIST_REPOS_USER_REQUEST_FAIL,
    error,
  };
}

export function getListReposByUserRequestSuccess(payload) {
  return {
    type: types.GET_LIST_REPOS_USER_REQUEST_SUCCESS,
    payload,
  };
}

export function getListReposByUser(userName) {
  return dispatch => {
    dispatch(getListReposByUserRequest());
    return repositoryApi
      .getListReposByUser(userName)
      .then(response => response.json())
      .then(response => {
        if (response.statusCode >= 400) {
          return dispatch(
            getListReposByUserRequestFail('Could not load repos'),
          );
        } else {
          return dispatch(getListReposByUserRequestSuccess(response));
        }
      });
  };
}
