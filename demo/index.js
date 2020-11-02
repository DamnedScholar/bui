
import router from 'bui/router/index.js'
router.config({
    root: location.hostname.match('github') ? '/bui/' : '/',
    prefix: '#/'
})

import './markdown-docs.js'

import './header.js'
import './main.js'
