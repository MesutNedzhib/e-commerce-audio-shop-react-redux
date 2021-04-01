import {
  CHANGE_PRODUCT_SUCCESS,
  SORT_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  SEARCH_PRODUCT_FAIL,
  SEARCH_PRODUCT_SUCCESS,
  FILTER_PRODUCT_BY_NAME_SUCCESS,
  FILTER_PRODUCT_BY_CATEGORY_NAME_SUCCESS,
  FILTER_PRODUCT_BY_NAME_FAIL,
} from "../constants/productConstants";
import initialState from "./initialState";

export const productListReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case SORT_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case FILTER_PRODUCT_BY_NAME_SUCCESS:
      return { loading: false, products: action.payload };
      case FILTER_PRODUCT_BY_NAME_FAIL:
        return {loading: false, error: action.payload}
    case SEARCH_PRODUCT_SUCCESS:
      return { loading: false, products: action.payload };
    case SEARCH_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = initialState.productDetails,
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productsChangerReducer = (
  state = initialState.productDetails,
  action
) => {
  switch (action.type) {
    case CHANGE_PRODUCT_SUCCESS:
      console.log(state);
      return state = action.payload;
    default:
      return state;
  }
};

// export const searchProductReducer = (state = initialState.products, action) => {
//   let newState;
//   switch (action.type) {
//     case SEARCH_PRODUCT_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// };
