import {
  CHANGE_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  SORT_PRODUCTS_SUCCESS,
  FILTER_PRODUCT_BY_NAME_SUCCESS,
  FILTER_PRODUCT_BY_CATEGORY_NAME_SUCCESS,
  FILTER_PRODUCT_BY_NAME_FAIL,
} from "../constants/productConstants";
import Axios from "axios";

export const getProducts = (categoryName) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    let path = "https://e-commerce-audio-shop.herokuapp.com/api/products";
    if (categoryName) {
      let newPath = `https://e-commerce-audio-shop.herokuapp.com/api/shop/${categoryName}`;
      path = newPath;
    }
    const { data } = await Axios.get(path);
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetails = (productId) => async (dispatch) => {
  dispatch({
    type: GET_PRODUCT_DETAILS_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await Axios.get(
      `https://e-commerce-audio-shop.herokuapp.com/api/products/${productId}`
    );
    dispatch({
      type: GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const changeProducts = (product) => (dispatch) => {
  dispatch({
    type: CHANGE_PRODUCT_SUCCESS,
    payload: product,
  });
};

export const sortProducts = (products) => (dispatch) => {
  dispatch({
    type: SORT_PRODUCTS_SUCCESS,
    payload: products,
  });
};

export const filterProductByName = (product) => (dispatch) => {
  try {
    dispatch({
      type: FILTER_PRODUCT_BY_NAME_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: FILTER_PRODUCT_BY_NAME_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterProductByNameFail = () => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCT_BY_NAME_FAIL,
    payload: "Product Not Found!",
  });
};

export const searchProduct = (word) => async (dispatch) => {
  try {
    const { data } = await Axios.get(
      `https://e-commerce-audio-shop.herokuapp.com/api/search/${word}`
    );
    if (data) {
      data.sort((a, b) => (a.name > b.name ? 1 : -1));
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: SEARCH_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
