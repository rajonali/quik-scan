/*
 * action types
 */
export const REQUEST_PRODUCT_ADD = 'REQUEST_PRODUCT_ADD';
export const PRODUCT_ADDED = 'PRODUCT_ADDED';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVED';
export const PRODUCT_UPDATED = "PRODUCT_UPDATED";
/*
 * action creators
 */ 

export function requestProductAdd() {
    return {
        type: REQUEST_PRODUCT_ADD
    }
}

export function productAdded(product) {
    return { 
        type: PRODUCT_ADDED,
        product
    }
}


export function updateProduct(product) {
    return {
        type: PRODUCT_UPDATED,
        product

    }
}

export function removeProduct() {
    return {
        type: PRODUCT_REMOVE
    }


}
