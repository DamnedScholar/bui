import {LitElement} from 'lit-element.js'

LitElement.prototype.get = function(key, defaultVal=''){
    let val = defaultVal

    if( this.model )
        val = this.model.get(key)

    return val === undefined ? defaultVal : val
}

