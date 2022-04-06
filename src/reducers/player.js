import { LOGIN } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case LOGIN:
    return {
      name: payload.name,
      assertions: payload.assertions,
      score: payload.score,
      gravatarEmail: payload.gravatarEmail,
    };
  default:
    return state;
  }
};

export default player;
