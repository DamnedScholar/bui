
/*
	NOTE: this concept is still in it's early stages
*/
import {Model} from 'backbone'
import _ from 'underscore'

Model.prototype.isEdited = function(){
	return this._editedAttrs&&Object.keys(this._editedAttrs).length>0
}

Model.prototype.editedAttrs = function(){
	return Object.assign({}, this._editedAttrs||{})
}

Model.prototype.saveEdited = function(opts={}){
	let attrs = Object.assign({}, this._editedAttrs)

	return new Promise(async resolve=>{
		
		opts.success = ()=>{
			this.trigger('edited', false, {})
			resolve()
		}
		
		opts.error = resolve
		
		try{
			await this.saveSync(attrs, opts)
			
			this._editedAttrs = {}
			this._origAttrs = null

		}catch(err){			
			// if fails to save, likely due to lack of URL specified, so fallback to using set
			// FIXME: this is weird design, but I think I used it this way once
			// might need to put a version of it back
			// this.set(attrs, opts)
			// opts.success()

			resolve()
		}
		
	})
}

Model.prototype.resetEdited = function(opts={}){
	let orig = this._origAttrs
	this._editedAttrs = {}
	this._origAttrs = null
	this.set(orig)
	this.trigger('edited', this.isEdited(), {})
}

Model.prototype.editAttr = function(key, val, opts={}){
	let attrs;
	if (_.isObject(key)) {
		attrs = key;
		opts = val || {};
	} else {
		(attrs = {})[key] = val;
	}
	
	this._origAttrs = this._origAttrs || Object.assign({}, this.attributes)
	this._editedAttrs = Object.assign((this._editedAttrs||{}), attrs)
	
	// remove 
	for(let key in attrs){
		let orig = this._origAttrs[key]
		let edited = this._editedAttrs[key]
		
		// could be improved when comparing arrays
		if( edited === orig || (edited && edited.length == 0 && orig && orig.length == 0) )
			delete this._editedAttrs[key]
	}
	
	opts._edited = true
	
	this.set(attrs, opts)
	
	let edited = this.editedAttrs()
	this.trigger('edited', this.isEdited(), edited)
	return edited
}