import { CHANGE_CATEGORY_SUCCESS } from "../constants/categoryConstants";
import initialState from './initialState'

export const changeCategoryReducer=(state=initialState.currentCategory,action)=>{
  switch (action.type) {
        case CHANGE_CATEGORY_SUCCESS:
          return action.payload;
        default:
          return state;
      }
}