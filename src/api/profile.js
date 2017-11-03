/**
 * @author Maria Fernanda Serna
 */

const getUser = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
};

export default {
  getUser,
};
