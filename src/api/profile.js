/**
 * @author Maria Fernanda Serna
 */

const getUser = userName => {
  return fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'token 147e4b456bef061205493f4847f25c7570ee7f2c',
    },
  });
};

export default {
  getUser,
};
