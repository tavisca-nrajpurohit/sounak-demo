import '../input';
import { LitElement, html} from 'lit-element';
import {store} from './store'

export class App extends LitElement {
    
    render(){
        return html`<my-input 
                    .store="${store}"
                    propPath="app.firstName" 
                    label="first name"
                    ></my-input>`;
    }

}
customElements.define('my-app', App);