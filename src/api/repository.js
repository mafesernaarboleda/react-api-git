/**
 * @author Maria Fernanda Serna
 */
import * as consts from './constants';

const getListReposByUser = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `token ${consts.TOKEN_GITHUB}`,
    },
  });
};

export default {
  getListReposByUser,
};
