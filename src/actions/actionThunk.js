import { errorReceiveToken, saveToken } from '.';
import { fetchToken } from '../services/fecthApi';

const actionFetchToken = () => async (dispatch) => {
  try {
    const response = await fetchToken();
    return dispatch(saveToken(response));
  } catch (error) {
    return dispatch(errorReceiveToken(error));
  }
};

export default actionFetchToken;
