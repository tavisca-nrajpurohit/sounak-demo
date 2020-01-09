import { createStore, combineReducers} from '@rakoon-badshah/dynamic-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LitElement, html,css} from 'lit-element';
//import '../form';
 //import '../info-form';
 //import '../cart';
import '../../../../lib/state-name-form/dist/app.e08811bb203056739745';
import '../../../../lib/state-info-form/dist/app.13e5a17423bcae9bcafc';
import '../../../../lib/state-cart/dist/app.3a72a552e9e4d3d533e2';

 const rootReducer= (state = {}, action)=>{
    return state;
}

export const store = createStore(combineReducers({
    app: rootReducer
}),composeWithDevTools());

export class App extends LitElement {
    static get styles() {
        return css`
        .grid-container {
            display: grid;
            grid-template-columns: auto auto 50%;
            padding: 5px;
        }
        .grid-item {
        border: 1px solid;
        padding: 5px;
        text-align: center;
        }
        `;
      }
    render(){
        return html`
        <div class="grid-container">
            <div class="grid-item">
                <name-form .store="${store}" propPath="app.Name_Form"></name-form>
            </div>
            <div class="grid-item">
                <info-form .store="${store}" propPath="app.Info_Form"></info-form>
            </div>
            <div class="grid-item">
                <my-cart .store="${store}" propPath="app.Cart"></my-cart>
            </div>
        </div>
        `;
    }
}
customElements.define('my-app', App);