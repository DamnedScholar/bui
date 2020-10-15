import '../elements/icon.js'
import '../elements/btn.js'
import '../elements/btn-group.js'
import '../elements/spinner.js'
import '../elements/spinner-overlay.js'
import '../elements/uploader.js'
import '../elements/paper.js'
import '../elements/text.js'
import '../elements/grid.js'
import '../elements/carousel.js'
import '../elements/timer.js'
import '../elements/empty-state.js'
import '../elements/label.js'
import '../elements/ribbon.js'
import '../elements/hr.js'
import '../elements/sub.js'
import '../elements/ts.js'
import '../elements/avatar.js'
import '../elements/code.js'
import '../elements/embed.js'
import '../elements/audio.js'
import '../presenters/tabs.js'
import '../presenters/form-control.js'
import '../presenters/list.js'
import '../presenters/cal.js'
import '../helpers/colors-list.js'
import '../styles/colors.less';

import defineFileIcon from '../elements/file-icon'
defineFileIcon()

import Dialog from '../presenters/dialog'
window.Dialog = Dialog

import Menu from '../presenters/menu'
window.Menu = Menu

import Notif from '../presenters/notif'
window.Notif = Notif


function convertComments(){
    var tw = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT, null, null)
    var comment
    var comments = []

    while( comment = tw.nextNode() ){
        comments.push(comment)
    }

    comments.forEach(com=>{
        let div = document.createElement('div')
        div.classList.add('demo-block')

        let str = com.textContent
        let strs = str.split("\n")
        let type = strs.shift()
        str = strs.join("\n")
        div.innerHTML = str;

        if( type )
            div.setAttribute('type', type)

        let script = div.querySelector('script')
        if( script )
            eval(script.innerText)

        com.replaceWith(div)
    })
}

convertComments()

// popstate
history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    convertComments()
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    convertComments()
    return ret;
})(history.replaceState);

window.addEventListener('popstate', function(){
    convertComments()
})
