import initialState from "./initialState";
import {
  CHANGE_LOCATION_BAR_STATE_SUCCESS,
  GET_LOCATION_BAR_STATE_SUCCESS,
  GET_LOCATION_BAR_STATE_SUCCESS2,
} from "../constants/locationBarConstatns";
export const locationBarReducer = (
  state = initialState.locationBarState,
  action
) => {
  switch (action.type) {
    case GET_LOCATION_BAR_STATE_SUCCESS:
      return  state = action.payload
    case GET_LOCATION_BAR_STATE_SUCCESS2:
        return state;
    case CHANGE_LOCATION_BAR_STATE_SUCCESS:
      return  state = action.payload;
    default:
      return state;
  }
};
