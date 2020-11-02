import {LitElement} from 'https://cdn.skypack.dev/lit-element'

LitElement.prototype.emitEvent = function(eventName, detail=null){

    var event = new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: detail
    });
    
    this.dispatchEvent(event)
}

