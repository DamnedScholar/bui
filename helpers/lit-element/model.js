/*
    Tells the element to update when a new backbone model
    is assigned
*/
import {LitElement} from 'https://cdn.skypack.dev/lit-element'

Object.defineProperty(LitElement.prototype, 'model', {

    set: function(val){
        const oldVal = this.model
        
        if( oldVal != val ){
            
            if( oldVal && this.unbindListeners)
                this.unbindListeners()

            this.__model = val
            
            this.bindListeners&&this.bindListeners()

            this.requestUpdate('model', oldVal)
            this.onModelChange&&this.onModelChange(val)
        }
    },

    get: function(){ return this.__model }

})
