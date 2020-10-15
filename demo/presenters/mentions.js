import { LitElement, html, css } from 'lit-element.js'
import View from './view.js'
import docs from 'bui/presenters/mentions/README.md.js'

customElements.define('demo-presenter-mentions', class extends View{

    static get title(){ return 'Mentions' }

    static get styles(){return [super.styles, css`
        
    `]}

    get docs(){ return docs }


    renderContent(){ return html`

    `}

})

export default customElements.get('demo-presenter-mentions')
