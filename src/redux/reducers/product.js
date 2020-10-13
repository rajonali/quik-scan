import {
    REQUEST_PRODUCT_ADD,
    PRODUCT_ADDED,
    PRODUCT_UPDATED,
    PRODUCT_REMOVE
  } from '../actions/product';
  
  const initialState = {
    product: {upc:'', imageURL:''}
  }
  
  export default function product(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PRODUCT_ADD:
            return state;
        case PRODUCT_ADDED:
            return Object.assign({}, state, {
                product: action.product
            });

        case PRODUCT_UPDATED:
            return {
                ...state,
                product: action.product
            }
        case PRODUCT_REMOVE:
            return Object.assign({}, state, {
                product: null
            });
        default:
            return state;
    }
  }