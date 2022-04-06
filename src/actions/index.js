export const LOGIN = 'LOGIN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const ERROR_RECEIVE_TOKEN = 'ERROR_RECEIVE_TOKEN';

export const login = (payload) => ({
  type: LOGIN,
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
