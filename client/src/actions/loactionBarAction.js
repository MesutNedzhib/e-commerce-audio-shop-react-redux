import { CHANGE_LOCATION_BAR_STATE_SUCCESS, GET_LOCATION_BAR_STATE_SUCCESS, GET_LOCATION_BAR_STATE_SUCCESS2 } from "../constants/locationBarConstatns"

export const getLoactionBarState = () => (dispatch)=>{
    const locationState = {
        state1: "SHOP",
        state2: "",
        state3: "",
    }
    dispatch({
        type: GET_LOCATION_BAR_STATE_SUCCESS,
        payload: locationState
    })
}

export const getLoactionBarState2 = () => (dispatch)=>{
    dispatch({
        type: GET_LOCATION_BAR_STATE_SUCCESS2
    })
}

export const changeLocationBarState = (newState) => (dispatch)=>{
    dispatch({
        type: CHANGE_LOCATION_BAR_STATE_SUCCESS,
        payload: newState
    })
}