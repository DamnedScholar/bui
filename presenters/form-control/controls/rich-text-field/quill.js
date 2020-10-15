import Quill from 'quill/core.js';
import Toolbar from 'quill/modules/toolbar.js';
import Bold from 'quill/formats/bold.js';
import Italic from 'quill/formats/italic.js';
// import Header from 'quill/formats/header.js';
// import Blockquote from 'quill/formats/blockquote.js';
import List, { ListItem } from 'quill/formats/list.js';

// custom modules
import './clipboard.js'
import './divider.js'
import {lineBreakMatcher, keyboardLinebreak} from './break.js'

Quill.register({
  'modules/toolbar': Toolbar,
  'formats/bold': Bold,
  'formats/italic': Italic,
//   'formats/header': Header,
//   'formats/blockquote': Blockquote,
  'formats/list': List,
  'formats/list-item': ListItem,
});

export {
    Quill,
    lineBreakMatcher,
    keyboardLinebreak
}
