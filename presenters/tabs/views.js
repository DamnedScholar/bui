import TabView from './view.js'

export default class TabViews extends Map {

    set active(view){
        
        if( view instanceof HTMLElement )
            view = view.tabBar.id
        if( view instanceof TabView )
            view = view.id
        
        view = this.get(view) || this.first
        
        // view is already the active one
        // if( view && view == this.active )
        //     return 

        if( view && !view.canDisplay ){

            // find the first view we can display
            let fallbackView
            this.forEach(v=>{
                if( !fallbackView && v.canDisplay )
                    fallbackView = v
            })

            this.active = fallbackView
            return false
        }
        
        this.forEach(v=>v.active=false)

        if( view ){
            this.__active = view.id
            view.active = true
        }
        
        if( this.key )
            view ? localStorage.setItem('tab-bar:'+this.key+':active', view.id) : localStorage.removeItem('tab-bar:'+this.key+':active')
    }

    get active(){
        let active = this.key ? localStorage.getItem('tab-bar:'+this.key+':active') : this.__active
        return active && this.get(active)
    }
    
    get first(){
        return this.at(0)
    }

    at(i){
        return Array.from(this.values())[i]
    }

    get last(){
        return this.at(this.size-1)
    }

    map(fn){
        let resp = []
        this.forEach((v, key)=>resp.push(fn(v, key)))
        return resp
    }
}
