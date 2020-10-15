/*
    Extensions for using lit-html with Backbone Views

    !! DEPRECATED
*/
import {render} from 'lit-html.js';
import {View} from 'backbone.js'

View.prototype.props = function(){
    // lets make this an opt in since I've yet to use props
    // return this.model && this.model.toTemplate()
    return {}
}

// see default `render` method in Backbone.Subviews
View.prototype.renderHTML = function(){
    if( this.html ){
        render(this.html(this.props()||{}), this.el, {eventContext: this})
    }
}
