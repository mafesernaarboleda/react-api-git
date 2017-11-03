import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../reducers/profile/actions';
import * as types from '../../reducers/profile/constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userName = 'mafesernaarboleda';
const payload = {
  email: null,
};

describe('async action get profile', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates GET_USER_REQUEST_SUCCESS when fetching user has been done', () => {
    fetchMock.get(
      'https://api.github.com/users/' + userName,
      {
        body: JSON.stringify(payload),
        status: 200,
        statusText: 'OK',
        headers: {'Content-Type': 'application/json'},
        sendAsJson: false,
      },
      {
        method: 'GET',
      },
    );

    const expectedActions = [
      {type: types.GET_USER_REQUEST},
      {type: types.GET_USER_REQUEST_SUCCESS, payload},
    ];

    const store = mockStore(payload);

    return store.dispatch(actions.getUser(userName)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
