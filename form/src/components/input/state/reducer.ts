import {customInputState} from './customInputState';
import {CUSTOM_INPUT_IS_FOCUSSED,CUSTOM_INPUT_NOT_FOCUSSED,CUSTOM_INPUT_VALUE_CHANGED} from './actions'
import {set} from '@rakoon-badshah/dynamic-redux'

const initialState: customInputState = {
        value: "",
        isTouched: false,
        hasFocus: false
};


function customInputNotFocussed(state:customInputState,action):customInputState{
    let newState =  set(state,'hasFocus',false);
    return newState;
}
function customInputisFocussed(state:customInputState,action):customInputState{
    let newState =  set(state,'isTouched',true);
    newState =  set(newState,'hasFocus',true);
    return newState;
}

function customInputValueChanged(state:customInputState,action):customInputState{
    let newState =  set(state,'value',action.value);
    return newState;
}

export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        case propPath+'.'+CUSTOM_INPUT_IS_FOCUSSED:
            return customInputisFocussed(state,action);
        case propPath+'.'+CUSTOM_INPUT_NOT_FOCUSSED:
            return customInputNotFocussed(state,action);
        case propPath+'.'+CUSTOM_INPUT_VALUE_CHANGED:
            return customInputValueChanged(state,action);
        default:
            return state;
    };
}