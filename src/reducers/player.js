import { RECEIVE_INFO_PLAYER } from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  emailHash: '',
};

const player = (state = INITIAL_STATE, { type, name, email, emailHash }) => {
  switch (type) {
  case RECEIVE_INFO_PLAYER:
    return {
      ...state,
      name,
      gravatarEmail: email,
      emailHash,
    };
  default:
    return state;
  }
};

export default player;
