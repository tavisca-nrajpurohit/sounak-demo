import {customCartState} from './customCartState';
import {CART_ADD_TO_LIST_REQUEST,CART_SET_ABSTRACT} from './actions'
import {set} from '@rakoon-badshah/dynamic-redux'


const initialState: customCartState = {
    namesByID: {
    },
    infoByID: {
    },
    numberOfNames:0,
    numberOfInfo:0,
    abstractUpdated:true
};

 function AddItemToCart(state:customCartState,action):customCartState{
        if(action.formType=="names"){
            return AddNamesToCart(state,action);
        }else if(action.formType=="info"){
            return AddInfoToCart(state,action);
        }else{
            return state;
        }
    }

function AddNamesToCart(state:customCartState,action):customCartState{
    let counter = state.numberOfNames;
    counter++;
    let newState = set(state,'namesByID'+'.'+counter+'.data',action.payload);
    newState = set(newState,'numberOfNames',counter);
    newState = set(newState,'abstractUpdated',false);
    return newState;
    }

function AddInfoToCart(state:customCartState,action):customCartState{
    let counter = state.numberOfInfo;
    counter++;
    let newState = set(state,'infoByID'+'.'+counter+'.data',action.payload);
    newState = set(newState,'numberOfInfo',counter);
    return newState;
    }

function UpdateAbstractInCart(state:customCartState,action):customCartState{
    let itemIndex = state.numberOfNames;
    let newState = set(state,'namesByID'+'.'+itemIndex+'.abstract',action.payload);
    newState = set(newState,'abstractUpdated',true);
    return newState;
    }

export const reducer = (propPath) => (state = initialState, action)=>{
    switch(action.type){
        case CART_ADD_TO_LIST_REQUEST:
            return AddItemToCart(state,action);
        case CART_SET_ABSTRACT:
            return UpdateAbstractInCart(state,action);
        default:
            return state;
    };
}
    