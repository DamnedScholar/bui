import { LitElement, html, css } from "lit-element";

export default class Label extends LitElement {

    static get styles(){return css`
        :host {
            display: inline-block;
            text-transform: uppercase;
            color: rgba(0,0,0,.33);
            font-weight: bold;
            font-size: 1rem;
            line-height: 1rem;
            --dividerThickness: 1px;
            vertical-align: middle;
        }

        :host([hidden]) {
            display: none;
        }

        :host([filled]),
        :host([badge]),
        :host([outline]) {
            --bgd: #aaa;
            --color: #fff;
            padding: 0.15em 0.3em 0.1em;
            border-radius: 3px;
            font-size: .8rem;
            text-transform: none;
            background: var(--bgd);
            color: var(--color);
        }

        :host([xs]) { font-size: .6rem; line-height: .6rem; }
        :host([sm]) { font-size: .8rem; line-height: .8rem; }
        :host([lg]) { font-size: 1.2rem; line-height: 1.2rem; }
        :host([xl]) { font-size: 1.4rem; line-height: 1.4rem; }

        :host([outline]) {
            background: none;
            border: solid 1px;
            border-color: var(--bgd);
            --color: var(--bgd);
        }

        :host([badge]) {
            border-radius: 30px;
            padding-left: .6em;
            padding-right: .6em;
        }

        :host([filled="black"]), :host([badge="black"]) { --bgd: #333; }
        :host([filled="gray"]), :host([badge="gray"]) { --bgd: #ddd; --color: #777; }
        :host([filled="blue"]), :host([badge="blue"]) { --bgd: var(--blue); }
        :host([filled="red"]), :host([badge="red"]) { --bgd: var(--red); }
        :host([filled="orange"]), :host([badge="orange"]) { --bgd: var(--orange); }
        :host([filled="green"]), :host([badge="green"]) { --bgd: var(--green); }
        :host([filled="pink"]), :host([badge="pink"]) { --bgd: var(--pink); }
        

        :host([outline="black"]) { --bgd: #333; }
        :host([outline="gray"]) { --bgd: #ddd; }
        :host([outline="blue"]) { --bgd: var(--blue); }
        :host([outline="red"]) { --bgd: var(--red); }
        :host([outline="orange"]) { --bgd: var(--orange); }
        :host([outline="green"]) { --bgd: var(--green); }
        :host([outline="pink"]) { --bgd: var(--pink); }

        b-hr {
            display: none;
            margin: 0;
            width: auto;
            height: var(--dividerThickness);
        }

        b-hr:first-child {
            margin-right: 1em;
        }

        b-hr:last-child {
            margin-left: 1em;
        }

        :host([divider]) {
            display: grid;
            align-items: center;
            grid-template-columns: 0 auto 1fr;
        }

        :host([divider]) b-hr {
            display: block;
        }

        :host([divider="center"]) {
            grid-template-columns: 1fr auto 1fr;
        }

        :host([divider="right"]) {
            grid-template-columns: 1fr auto 0;
        }
    `}

    render(){return html`
        <b-hr></b-hr>
        <slot></slot>
        <b-hr></b-hr>
    `}
}

customElements.define('b-label', Label)