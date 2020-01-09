export const CART_ADD_TO_LIST_REQUEST = "CART_ADD_TO_LIST_REQUEST";


export function ACTION_CART_ADD_TO_LIST_REQUEST(data){
    return {
        type: CART_ADD_TO_LIST_REQUEST,
        formType:'names',
        payload: data
    }
}