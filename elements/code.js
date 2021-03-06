import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element'

customElements.define('b-code', class extends LitElement{

    static get styles(){return css`

        :host {
            background: var(--theme-bgd-accent, #ccc);
            border-radius: 3px;
            color: initial;
            padding: 0 .3em;
        }

        code {
            color: var(--theme-color, inherit);
        }

        :host([block]) {
            display: block;
            font-family: monospace;
            padding: 1em;
            overflow-x: auto;
        }

        :host([block]) code {
            white-space: pre-wrap;
        }
    `}

    connectedCallback(){
        super.connectedCallback()
        this.innerText = this.innerText.trim()
    }

    render(){return html`
        <code><slot></slot></code>
    `}

})

export default customElements.get('b-code')
