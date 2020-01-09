import {customFormState} from './customFormState';
import {CART_ADD_TO_LIST_REQUEST} from './actions'
import {set} from '@rakoon-badshah/dynamic-redux'


const initialState: customFormState = {
    isSubmitted:false,
    text_Name:"",
    text_NickName:""
};

function formSubmitted(state:customFormState,action):customFormState{
let newState =  set(state,'isSubmitted',true);
newState = set(newState,'text_Name',action.payload.name);
newState = set(newState,'text_NickName',action.payload.nickName);
return newState;
}


export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        case CART_ADD_TO_LIST_REQUEST:
            return formSubmitted(state,action);
        default:
            return state;
    };
}
