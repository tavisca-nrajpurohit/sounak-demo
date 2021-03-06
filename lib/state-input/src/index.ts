import { LitElement, html, property, customElement} from 'lit-element';
import '@material/mwc-textfield';
import {reducer} from './state/reducer';
import {ACTION_CUSTOM_INPUT_NOT_FOCUSSED,ACTION_CUSTOM_INPUT_VALUE_CHANGED,ACTION_CUSTOM_INPUT_IS_FOCUSSED} from './state/actions';

@customElement('my-input')
export class MyInput extends LitElement {

  @property({type : String})  
  propPath="app";
  @property({type : String})  
  label="Custom Input";
  @property({type : String})  
  value="";
  @property({type : Object})  
  store:any;

  render(){
    if(this.store){
      this.store.attachReducers({ [this.propPath]:reducer(this.propPath)});
    }
    return html`<mwc-textfield 
                  label=${this.label}
                  @focusin = "${this.CustomInputIsFocussed}"
                  @focusout = "${this.CustomInputIsNotFocussed}"
                  @keyup = "${this.CustomInputValueChanged}"
                  type='text'
                  value="${this.value}"
                ></mwc-textfield>`;
  }

  
  CustomInputIsFocussed(){
    this.store.dispatch(ACTION_CUSTOM_INPUT_IS_FOCUSSED(this.propPath));
  }
  CustomInputIsNotFocussed(){
    this.store.dispatch(ACTION_CUSTOM_INPUT_NOT_FOCUSSED(this.propPath));
  }
  CustomInputValueChanged(e:any){
    this.store.dispatch(ACTION_CUSTOM_INPUT_VALUE_CHANGED(this.propPath,e.target.value));
  }
}
