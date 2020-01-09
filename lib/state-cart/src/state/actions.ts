export const CART_ADD_TO_LIST_REQUEST = "CART_ADD_TO_LIST_REQUEST";
export const CART_SET_ABSTRACT = "CART_SET_ABSTRACT";

export function ACTION_CART_ADD_TO_LIST_REQUEST(data){
    return {
        type: CART_ADD_TO_LIST_REQUEST,
        payload: data
    }
}

export function ACTION_CART_SET_ABSTRACT(abstract){
    return {
        type: CART_SET_ABSTRACT,
        payload: abstract
    }
}