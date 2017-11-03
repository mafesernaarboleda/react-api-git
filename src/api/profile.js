/**
 * @author Maria Fernanda Serna
 */

const getUser = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'token 43a765f87a4f2fd4e09c20f45f0834949f1bb17b',
    },
  });
};

export default {
  getUser,
};
