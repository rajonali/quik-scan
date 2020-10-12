/*
 * action types
 */
export const REQUEST_PRODUCT_ADD = 'REQUEST_PRODUCT_ADD';
export const PRODUCT_ADDED = 'PRODUCT_ADDED';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVED';

/*
 * action creators
 */ 

export function requestProductAdd() {
    return {
        type: REQUEST_PRODUCT_ADD
    }
}

export function productAdded(user) {
    return { 
        type: PRODUCT_ADDED,
        user
    }
}

export function removeProduct() {
    return {
        type: PRODUCT_REMOVE
    }
}
