/**
 * @author Maria Fernanda Serna
 */

import * as consts from './constants';

const getUser = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `token ${consts.TOKEN_GITHUB}`,
    },
  });
};

export default {
  getUser,
};
