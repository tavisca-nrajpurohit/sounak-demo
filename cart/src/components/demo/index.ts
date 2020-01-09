import { createStore, combineReducers,applyMiddleware} from '@rakoon-badshah/dynamic-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LitElement, html} from 'lit-element';
import '../cart';

 const rootReducer= (state = {}, action)=>{
    return state;
}
export const store = createStore(combineReducers({
    app: rootReducer
}),composeWithDevTools());

export class App extends LitElement {
    
    render(){
        return html`<my-cart 
                    .store="${store}"
                    propPath="app.myCart" 
                    ></my-cart>`;
    }

}
customElements.define('my-app', App);