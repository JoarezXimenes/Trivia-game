export const LOGIN = 'LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const ERROR_RECEIVE_TOKEN = 'ERROR_RECEIVE_TOKEN';
export const RECEIVE_INFO_PLAYER = 'RECEIVE_INFO_PLAYER';

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

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});

export const errorReceiveToken = (error) => ({
  type: ERROR_RECEIVE_TOKEN,
  error,
});

export const receiveInfoPlayer = (name, email, emailHash) => ({
  type: RECEIVE_INFO_PLAYER,
  name,
  email,
  emailHash,
});
