import { LitElement, html, property} from 'lit-element';
import {reducer} from './state/reducer';
import {ACTION_CART_ADD_TO_LIST_REQUEST} from './state/actions';
import '../../state-input/dist/app.dbd358263e73be3f45e9';
import '@material/mwc-button';
import {get} from '@rakoon-badshah/dynamic-redux';

export class InfoForm extends LitElement {

  @property({type : String})  
  propPath="app";
  @property({type : Object})  
  store;

  name="";
  age="";
  gender="";

  render(){
    if(this.store){
      this.store.attachReducers({ [this.propPath]:reducer(this.propPath)});
      this.store.subscribe(()=>{
        let st = this.store.getState();
        this.name = get(st,this.propPath+".name.value");
        this.age = get(st,this.propPath+".age.value");
        this.gender = get(st,this.propPath+".gender.value");
      });
    } 

    return html`
    Info Form:<br>
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
    propPath="${this.propPath}.age" 
    label="Age"
    value="${this.age}"
    ></my-input>
    <br>
    <my-input 
    .store="${this.store}"
    propPath="${this.propPath}.gender" 
    label="Gender"
    value="${this.gender}"
    ></my-input>
    <br>
    <mwc-button outlined label="Submit" @click = "${this.SubmitForm}"></mwc-button>
                </form>`;
  }

  SubmitForm(){
    let data = {
      name: this.name,
      age: this.age,
      gender: this.gender
    };
    this.store.dispatch(ACTION_CART_ADD_TO_LIST_REQUEST(data));
  }
}
customElements.define('info-form', InfoForm);