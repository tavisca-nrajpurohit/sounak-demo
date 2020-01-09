import { LitElement, html, property} from 'lit-element';
import {reducer} from './state/reducer';
import {ACTION_CART_ADD_TO_LIST_REQUEST} from './state/actions';
//import '../../components/input';
import '../../../../lib/state-input/dist/app.dbd358263e73be3f45e9'
import '@material/mwc-button';
import {get} from '@rakoon-badshah/dynamic-redux';

export class MyForm extends LitElement {

  @property({type : String})  
  propPath="app";
  @property({type : Object})  
  store;

  name="";
  nickName="";

  render(){
    if(this.store){
      this.store.attachReducers({ [this.propPath]:reducer(this.propPath)});
      this.store.subscribe(()=>{
        let st = this.store.getState();
        this.name = get(st,this.propPath+".name.value");
        this.nickName = get(st,this.propPath+".nickName.value");
      });
    } 

    return html`
    Name Form:<br>
    <form>
    <my-input 
    .store="${this.store}"
    propPath="${this.propPath}.name" 
    label="Name"
    value="${this.name}"
    ></my-input>
    <br>
    <my-input 
    .store="${this.store}"
    propPath="${this.propPath}.nickName" 
    label="Nick Name"
    value="${this.nickName}"
    ></my-input>
    <br>
    <mwc-button outlined label="Submit" @click = "${this.SubmitForm}"></mwc-button>
                </form>`;
  }

  SubmitForm(){
    let data = {
      name: this.name,
      nickName: this.nickName
    };
    this.store.dispatch(ACTION_CART_ADD_TO_LIST_REQUEST(data));
  }
}
customElements.define('my-form', MyForm);