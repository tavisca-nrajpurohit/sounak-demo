var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property, customElement } from 'lit-element';
import '@material/mwc-textfield';
import { reducer } from './state/reducer';
import { ACTION_CUSTOM_INPUT_NOT_FOCUSSED, ACTION_CUSTOM_INPUT_VALUE_CHANGED, ACTION_CUSTOM_INPUT_IS_FOCUSSED } from './state/actions';
let MyInput = class MyInput extends LitElement {
    constructor() {
        super(...arguments);
        this.propPath = "app";
        this.label = "Custom Input";
        this.value = "";
    }
    render() {
        if (this.store) {
            this.store.attachReducers({ [this.propPath]: reducer(this.propPath) });
        }
        return html `<mwc-textfield 
                  label=${this.label}
                  @focusin = "${this.CustomInputIsFocussed}"
                  @focusout = "${this.CustomInputIsNotFocussed}"
                  @keyup = "${this.CustomInputValueChanged}"
                  type='text'
                  value="${this.value}"
                ></mwc-textfield>`;
    }
    CustomInputIsFocussed() {
        this.store.dispatch(ACTION_CUSTOM_INPUT_IS_FOCUSSED(this.propPath));
    }
    CustomInputIsNotFocussed() {
        this.store.dispatch(ACTION_CUSTOM_INPUT_NOT_FOCUSSED(this.propPath));
    }
    CustomInputValueChanged(e) {
        this.store.dispatch(ACTION_CUSTOM_INPUT_VALUE_CHANGED(this.propPath, e.target.value));
    }
};
__decorate([
    property({ type: String })
], MyInput.prototype, "propPath", void 0);
__decorate([
    property({ type: String })
], MyInput.prototype, "label", void 0);
__decorate([
    property({ type: String })
], MyInput.prototype, "value", void 0);
__decorate([
    property({ type: Object })
], MyInput.prototype, "store", void 0);
MyInput = __decorate([
    customElement('my-input')
], MyInput);
export { MyInput };
