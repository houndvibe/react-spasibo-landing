import {
  ON_SOME
} from "./types";

const initialState = {
  something: true
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ON_SOME:
      return {
        ...state
      }
      return state;
  }
}