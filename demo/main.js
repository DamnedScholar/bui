import App from 'bui/presenters/tabs/app.js'
import './overview.js'
import './elements.js'
import './presenters.js'
import './util.js'
import './server.js'

customElements.define('demo-main', class extends App{

    get views(){
        return `
            demo-overview
            demo-elements
            demo-presenters
            demo-util
            demo-server
        `
    }

})

export default customElements.get('demo-main')
