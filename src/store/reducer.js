import {
  ON_SHOW_CITY_POPUP,
  ON_HIDE_CITY_POPUP,
  ON_SEARCH_ON,
  ON_SEARCH_OFF
} from "./types";

const initialState = {
  isCitySelectPopupVisible: false,
  currentCity: 'Санкт-Петербург',
  isSearchActive: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_SHOW_CITY_POPUP:
      return {
        ...state,
        isCitySelectPopupVisible: true
      };
    case ON_HIDE_CITY_POPUP:
      return {
        ...state,
        isCitySelectPopupVisible: false
      };
    case ON_SEARCH_ON:
      return {
        ...state,
        isSearchActive: true
      };
    case ON_SEARCH_OFF:
      return {
        ...state,
        isSearchActive: false
      };
    default:
      return state
  }
}