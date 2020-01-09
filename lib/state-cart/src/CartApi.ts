import {ACTION_CART_SET_ABSTRACT} from './state/actions'
import {get} from '@rakoon-badshah/dynamic-redux';


export async function GetAbstract(itemIndex, store, propPath){
    let state = store.getState();
    let data =  get(state,propPath);
    let itemName = data.namesByID[itemIndex]["data"]["name"];

    const response = await fetch('https://api.duckduckgo.com/?format=json&pretty=1&q='+itemName);
    const myJson = await response.json();
    if(myJson["Abstract"]==""){
        store.dispatch(ACTION_CART_SET_ABSTRACT("No information retrieved from Wikipedia."));
    }else{
        store.dispatch(ACTION_CART_SET_ABSTRACT(myJson["Abstract"]));
    }
}