
import router from 'bui/router'
router.config({
    root: location.hostname.match('github') ? '/bui/' : '/',
    prefix: '#/'
})

import './markdown-docs.js'

import './header.js'
import './main.js'
