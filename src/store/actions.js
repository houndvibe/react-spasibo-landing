import {
  ON_SHOW_CITY_POPUP,
  ON_HIDE_CITY_POPUP,
  ON_SEARCH_ON,
  ON_SEARCH_OFF
} from "./types";

export const onShowCityPopup = () => (dispatch) => {
  dispatch({
    type: ON_SHOW_CITY_POPUP,
  });
};
export const onHideCityPopup = () => (dispatch) => {
  dispatch({
    type: ON_HIDE_CITY_POPUP,
  });
};
export const onSearchOn = () => (dispatch) => {
  dispatch({
    type: ON_SEARCH_ON,
  });
};

export const onSearchOff = () => (dispatch) => {
  dispatch({
    type: ON_SEARCH_OFF,
  });
};

