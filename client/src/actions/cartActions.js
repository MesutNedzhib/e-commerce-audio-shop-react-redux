import { ADD_TO_CART, CHANGE_CART_QUANTITY, REMOVE_FROM_CART } from "../constants/cartConstants"

export const addToCart = (cartItem) => (dispatch)=>{
    dispatch({
        type:ADD_TO_CART,
        payload:cartItem
    })
}

export const removeFromCart = (product) => (dispatch)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:product
    })
}

export const chnageCartQuantity = (cartItem) => (dispatch)=>{
    dispatch({
        type:CHANGE_CART_QUANTITY,
        payload:cartItem
    })
}