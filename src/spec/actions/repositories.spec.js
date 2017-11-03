import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../reducers/repos/actions';
import * as types from '../../reducers/repos/constants';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const userName = 'mafesernaarboleda';
const payload = [
  {
    name: 'example',
  },
];

describe('async action get list repositories', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates GET_LIST_REPOS_USER_REQUEST when fetching repos by user has been done', () => {
    fetchMock.get(
      'https://api.github.com/users/' + userName + '/repos',
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
      {type: types.GET_LIST_REPOS_USER_REQUEST},
      {type: types.GET_LIST_REPOS_USER_REQUEST_SUCCESS, payload},
    ];

    const store = mockStore(payload);

    return store.dispatch(actions.getListReposByUser(userName)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
