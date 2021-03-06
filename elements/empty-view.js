import { LitElement, html, css } from 'https://cdn.skypack.dev/lit-element'
import EmptyState from 'bui/elements/empty-state.js'

customElements.define('b-empty-view', class extends EmptyState {

    static get styles(){return [super.styles, css`
        ::slotted(svg) {
            width: 420px;
            max-width: 70vw;
            height: auto;
            box-sizing: border-box;
        }

        h1 {
            font-weight: normal;
            color: var(--theme-color);
        }

        div {
            color: var(--theme-color-accent);
            width: 400px;
            max-width: 90%;
        }
    `]}

    render(){return html`
        
        <slot></slot>

        <slot name="illustration"></slot>

        <h1><slot name="title"></slot></h1>

        <div><slot name="msg"></slot></div>
            
    `}

})

export default customElements.get('b-empty-view')
