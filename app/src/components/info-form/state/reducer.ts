import {customFormState} from './customFormState';
import {CART_ADD_TO_LIST_REQUEST} from './actions'
import {set} from '@rakoon-badshah/dynamic-redux'


const initialState: customFormState = {
    isSubmitted:false,
    text_Name:"",
    text_Age:"",
    text_Gender:""
};

function formSubmitted(state:customFormState,action):customFormState{
let newState =  set(state,'isSubmitted',true);
newState = set(newState,'text_Name',action.payload.name);
newState = set(newState,'text_Age',action.payload.age);
newState = set(newState,'text_Gender',action.payload.gender);
return newState;
}


export const reducer = (propPath) => (state = initialState, action)=>{
    if(action.formType == "info"){
        switch(action.type){
            case CART_ADD_TO_LIST_REQUEST:
                return formSubmitted(state,action);
            default:
                return state;
        };
    }else{
        return state;
    }
    
}
