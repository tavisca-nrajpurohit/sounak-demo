import { createStore, combineReducers} from '@rakoon-badshah/dynamic-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer= (state = {}, action)=>{
    return state;
}
export const store = createStore(combineReducers({
    app: rootReducer
}),composeWithDevTools());
