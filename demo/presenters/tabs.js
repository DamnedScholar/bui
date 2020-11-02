import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element'
import View from './view.js'
import docs from 'bui/presenters/tabs/README.md.js'

customElements.define('demo-presenter-tabs', class extends View{

    static get title(){ return 'Tabs' }

    static get styles(){return [super.styles, css`
        
    `]}

    get docs(){ return docs }

    renderContent(){return html`
        <b-paper overshadow compact><b-tabs>
            <div title="Tab 1">Tab 1 content</div>
            <div title="Tab 2">Tab 2 content</div>
        </b-tabs></b-paper>
        
        <br><br>

        <b-h2>Documentation</b-h2>
        <br>
    `}

})

export default customElements.get('demo-presenter-tabs')
