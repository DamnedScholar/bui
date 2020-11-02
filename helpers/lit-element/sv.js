/*
    Creates a linked subview if needed
*/
import {LitElement} from 'https://cdn.skypack.dev/lit-element'

LitElement.prototype.sv = function(viewName, elementName){
    this.__subviews = this.__subviews || {}
    
    if( !this.__subviews[viewName] ){

        const Element = typeof elementName == 'string' ? customElements.get(elementName) : elementName;

        if( Element === undefined ) throw Error(elementName+' is not a valid custom element')
        
        this.__subviews[viewName] = new Element()
        this.__subviews[viewName].parentView = this
    }
        
    return this.__subviews[viewName]
}
