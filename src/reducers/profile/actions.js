/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';
import profileApi from '../../api/profile';

export function getUserRequest() {
  return {
    type: types.GET_USER_REQUEST,
  };
}

export function getUserRequestFail(error) {
  return {
    type: types.GET_USER_REQUEST_FAIL,
    error,
  };
}

export function getUserRequestSuccess(payload) {
  return {
    type: types.GET_USER_REQUEST_SUCCESS,
    payload,
  };
}

export function getUser(userName) {
  return dispatch => {
    dispatch(getUserRequest());
    return profileApi
      .getUser(userName)
      .then(response => response.json())
      .then(response => {
        if (response.statusCode >= 400) {
          return dispatch(getUserRequestFail('Could not load user'));
        } else {
          return dispatch(getUserRequestSuccess(response));
        }
      });
  };
}
