import Axios from "axios";
import {
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CHANGE_CATEGORY_SUCCESS,
} from "../constants/categoryConstants";

export const getCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(
      "https://e-commerce-audio-shop.herokuapp.com/api/categories"
    );
    dispatch({
      type: CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY_SUCCESS,
    payload: category,
  });
};
