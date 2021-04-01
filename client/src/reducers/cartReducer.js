import { ADD_TO_CART, CHANGE_CART_QUANTITY, REMOVE_FROM_CART } from "../constants/cartConstants";
import initialState from "./initialState";
export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:

      let addedItem = state.find(
        (c) => c.product._id === action.payload.product._id
      );
      
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if(cartItem.quantity === cartItem.product.countInStock){
            return cartItem;
          }
          if (cartItem.product._id === action.payload.product._id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });           
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

      case REMOVE_FROM_CART:
        let newState = state.filter(cartItem=>cartItem.product._id !== action.payload._id);
        return newState;

      case CHANGE_CART_QUANTITY:
          let changeAddedItem = state.find(
            (c) => c.product._id === action.payload.product._id
          );

          if (changeAddedItem) {
            let newState = state.map((cartItem) => {
              if (cartItem.product._id === action.payload.product._id) {
                return Object.assign({}, changeAddedItem, {
                  quantity: changeAddedItem.quantity = action.payload.quantity,
                });
              }
              return cartItem;
            });
            return newState;
          } else {
            return [...state, { ...action.payload }];
          }

    default:
      return state;
  }
};
