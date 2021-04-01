import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { changeCategoryReducer } from "./reducers/changeCategoryReducer";
import  {categoryListReducer} from './reducers/categoryListReducer'
import { productListReducer,
  productDetailsReducer,
  productsChangerReducer,
  // searchProductReducer  
} from "./reducers/productListReducers";
import {locationBarReducer} from './reducers/loactionBarReducers';
import { cartReducer } from "./reducers/cartReducer";

const initialState = {};

const reducer = combineReducers({
 categories:categoryListReducer,
 products:productListReducer,
 currentCategory:changeCategoryReducer,
 productDetails:productDetailsReducer,
 locationState:locationBarReducer,
 productChange: productsChangerReducer,
 cart: cartReducer
//  searchProduct: searchProductReducer 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;