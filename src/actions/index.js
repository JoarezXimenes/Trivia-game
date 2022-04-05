export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const FETCH_GRAVATAR = 'FETCH_GRAVATAR';
export const GET_PLACAR = 'GET_PLACAR';

export const getPlacar = (payload) => ({
  type: GET_PLACAR,
  payload,
});

export const getGravatar = (payload) => ({
  type: FETCH_GRAVATAR,
  payload,
});
