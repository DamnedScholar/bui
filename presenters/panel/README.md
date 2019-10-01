Panel Presenter
===================

Presents a view as an overlay panel. Panels can be full size, vary in width/height, and anchor to
different areas on the screen.

## Panel

```javascript
let panel = new Panel(view, options)
panel.open()
```

### Options

- `title` (will be displayed in `b-panel-toolbar`)
- `width` (string)
- `height` (string)
- `anchor` (top, right, bottom, left, center)
- `type` (modal)
- `closeBtn` (bool) - will show a close button in the top right
- `animation` (scale [only works on anchor=center])
- `disableBackdropClick` - by default clicking backdrop will close panel
- `closeOnEsc` - default is false
- `controller` - specify a different panel controller (see below)
- `onClose` - do something before closing; return `false` to stop closing
- `onBackdropClick` - do something when backdrop clicked; return `false` to stop closing
- `onKeydown` - only fires if panel is on top (of other panels)

### Basic Use
It is best practice to give panels a name of a custom element to render

```javascript
import {Panel} from 'bui'

let panel = new Panel('custom-element', {
    title: 'My Custom Element View',
    width: '600px',
    height: '800px',
    anchor: 'center'
})

panel.open()
```

**Tip:** panels will link themselves to the custom element they are rendering with `.panel`.
So inside of `custom-element` you can access the panel with `this.panel`

### Dynamic html
Rendering panels this way probably shouldn't happen very often, but it is supported.

```javascript
import {Panel} from 'bui'
import {html} from 'lit-html'

new Panel(()=>html`
    <b-panel-toolbar></b-panel-toolbar>
    <section>	
        <p>Dynamically generated content</p>
    </section>
`, {title: 'Custom Panel'}).open()
```

### Registering a Custom Element
Panel is integrated with `router` allowing for panels be opened via url.
The registered panel will not be created until the url is triggered

```javascript
import {Panel, router} from 'bui'

// Panel.register(path, view, options)
Panel.register('my-custom-element', 'custom-element', {
    title: 'My Custom Element View'
})

router.goTo('my-custom-element')
// url will change to `/#/my-custom-element`
```

#### Events
`onOpen(state)`  
If the custom element implements `onOpen`, the panel will call it with the
route `state` object


### Animation
There are some built in animations

```js
panel.shake()
panel.bounce()
```


## Controller
Panels are rendered inside of a panel controller `<b-panels></b-pannels>`.

When the first panel is opened a root controller will be created and appended
to the the body. If you wish for the root controller to be rendered somewhere
other than the root of body, you can create one ahead of time

```html
<body>
    <main>
        <b-panels name="root"></b-panel>
    </main>
</body>
```

#### Multiple Controllers

Panels can also be opened inside of other panel controllers by first creating the controller
with a different name and then specifying the controller in the panel opts

```html
<b-panels name="sub-panel"></b-panels>
```

```js
let panel = new Panel('custom-element', {
    controller: 'sub-panel'
})
```

>Note: if the controller cannot be found, the root controller will be used

## Toolbar

A panel only presents the view given to it. If you would like a toolbar with a close button the view
needs to render one. A panel toolbar element has been created for such a task.

```html
<b-panel-toolbar></b-panel-toolbar>
```
>A close button will be rendered and a title will be displayed if the panel has a `title` property set

### Slots

- `left`
- `right`
- `middle` - next to title
- `title` - in place of title
- `close-btn` - use your own close button

```html
<b-panel-toolbar>
    <span slot="middle">I will appear after the title</span>
    <span slot="right">
        <b-btn>Right Button</b-btn>
    </span>
</b-panel-toolbar>
```

### Attributes

- `shadow`
- `overlay`
- `notitle`

## Modal
Although designed as a large panel view, panels can be leveraged to present
modal (popup/alert) windows. This can be accomplished through the options
parameter or through the convenient Modal function

```js
import {Modal} from 'bui/presenters/panel'

Modal('my-view')
Modal('my-view', {width: '400px', closeBtn: true})
```

**Note** `closeOnEsc:true` will be automatically set when `closeBtn:true` is set 