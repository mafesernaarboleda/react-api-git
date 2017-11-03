/**
 * @author Maria Fernanda Serna
 */

const getListReposByUser = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
};

export default {
  getListReposByUser,
};
