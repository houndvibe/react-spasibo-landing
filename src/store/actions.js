import {
  ON_SHOW_CITY_POPUP,
  ON_HIDE_CITY_POPUP,
  ON_SEARCH_ON,
  ON_SEARCH_OFF
} from "./types";

export const onShowCityPopup = () => (dispatch, getState) => {
  dispatch({
    type: ON_SHOW_CITY_POPUP,
  });
};
export const onHideCityPopup = () => (dispatch, getState) => {
  dispatch({
    type: ON_HIDE_CITY_POPUP,
  });
};
export const onSearchOn = () => (dispatch, getState) => {
  dispatch({
    type: ON_SEARCH_ON,
  });
};

export const onSearchOff = () => (dispatch, getState) => {
  dispatch({
    type: ON_SEARCH_OFF,
  });
};

