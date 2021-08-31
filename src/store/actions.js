import {
  ON_SOME
} from "./types";

export const onSome = (id) => (dispatch, getState) => {
  dispatch({
    type: ON_SOME,
    payload: 1
  });
};
