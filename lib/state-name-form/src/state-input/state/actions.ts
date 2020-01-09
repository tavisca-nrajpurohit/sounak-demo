export const CUSTOM_INPUT_IS_FOCUSSED = "CUSTOM_INPUT_IS_FOCUSSED";
export const CUSTOM_INPUT_NOT_FOCUSSED = "CUSTOM_INPUT_NOT_FOCUSSED";
export const CUSTOM_INPUT_VALUE_CHANGED = "CUSTOM_INPUT_VALUE_CHANGED";


export function ACTION_CUSTOM_INPUT_IS_FOCUSSED(propPath:string){
    return {
        type: propPath+'.'+CUSTOM_INPUT_IS_FOCUSSED
    }
}
export function ACTION_CUSTOM_INPUT_NOT_FOCUSSED(propPath:string){
    return {
        type: propPath+'.'+CUSTOM_INPUT_NOT_FOCUSSED
    }
}
export function ACTION_CUSTOM_INPUT_VALUE_CHANGED(propPath:string, newValue:string){
    return {
        type: propPath+'.'+CUSTOM_INPUT_VALUE_CHANGED,
        value: newValue
    }
}