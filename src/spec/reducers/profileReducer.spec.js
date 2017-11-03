import profile from '../../reducers/profile/profileReducer';
import * as types from '../../reducers/profile/constants';
import {Reducer} from 'redux-testkit';
import expect from 'expect';

const initialState = {
  profile: {},
  apiError: '',
  successGetProfile: false,
};

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(profile(undefined, {})).toEqual(initialState);
  });

  it('should not affect state', () => {
    const apiError = '';
    Reducer(profile)
      .expect({type: types.GET_USER_REQUEST})
      .toReturnState({...initialState, apiError});
  });

  it('should handle GET_USER_REQUEST_FAIL', () => {
    const state = {
      profile: {},
      apiError: 'Could not load user',
      successGetProfile: false,
    };
    Reducer(profile)
      .expect({type: types.GET_USER_REQUEST_FAIL})
      .toReturnState(state);
  });

  it('should handle GET_USER_REQUEST_SUCCESS', () => {
    const state = {
      profile: {email: 'mafesernaarboleda@gmail.com'},
      apiError: '',
      successGetProfile: true,
    };
    Reducer(profile)
      .expect({type: types.GET_USER_REQUEST_SUCCESS})
      .toReturnState(state);
  });
});
