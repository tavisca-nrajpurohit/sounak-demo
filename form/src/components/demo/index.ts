import { createStore, combineReducers} from '@rakoon-badshah/dynamic-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LitElement, html} from 'lit-element';
import '../form';


 const rootReducer= (state = {}, action)=>{
    return state;
}
export const store = createStore(combineReducers({
    app: rootReducer
}),composeWithDevTools());

export class App extends LitElement {
    
    render(){
        return html`<my-form 
                    .store="${store}"
                    propPath="app.nameForm" 
                    ></my-form>`;
    }

}
customElements.define('my-app', App);