import { RECEIVE_INFO_PLAYER, UPDATE_SCORE } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  emailHash: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_INFO_PLAYER:
    return {
      ...state,
      name: action.name,
      gravatarEmail: action.email,
      emailHash: action.emailHash,
    };
  case UPDATE_SCORE:
    return {
      ...state,
      score: action.score,
    };
  default:
    return state;
  }
};

export default player;
