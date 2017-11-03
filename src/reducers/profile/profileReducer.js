/**
 * @author Maria Fernanda Serna
 */

import * as types from './constants';

const initialState = {
  profile: {},
  apiError: '',
  successGetProfile: false,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        apiError: '',
      };
    case types.GET_USER_REQUEST_FAIL:
      return {
        ...state,
        profile: {},
        apiError: action.error ? action.error : 'Could not load user',
        successGetProfile: false,
      };
    case types.GET_USER_REQUEST_SUCCESS:
      return {
        ...state,
        profile: action.payload
          ? action.payload
          : {email: 'mafesernaarboleda@gmail.com'},
        apiError: '',
        successGetProfile: true,
      };
    default:
      return state;
  }
};

export default profile;
