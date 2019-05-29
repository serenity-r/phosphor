/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

import '../style/index.css';

import {
  BoxPanel, Widget
} from '@phosphor/widgets';

export {
  CommandRegistry
} from '@phosphor/commands';

export {
  Message
} from '@phosphor/messaging';

export {
  BoxPanel, DockPanel, Widget
} from '@phosphor/widgets';

export class ContentWidget extends Widget {

  static createNode(): HTMLElement {
    let node = document.createElement('div');
    let content = document.createElement('div');
    node.appendChild(content);
    return node;
  }

  constructor(name: string) {
    super({ node: ContentWidget.createNode() });
    this.setFlag(Widget.Flag.DisallowLayout);
    this.addClass('content');
    this.addClass(name.toLowerCase());
    this.title.label = name;
    this.title.closable = true;
    this.title.caption = `Long description for: ${name}`;
  }
}

function main(): void {
  var hsplit = new BoxPanel({direction: 'left-to-right'});
  hsplit.id = 'hsplit';
  
  var vsplit = new BoxPanel({direction: 'top-to-bottom'});
  vsplit.id = 'vsplit';

  // Create ContentWidget (right now, uses predefined function)
  var r1 = new ContentWidget('Red');
  var b1 = new ContentWidget('Blue');
  var g1 = new ContentWidget('Green');

  // Add widgets in appropriate places - this can be done in any order
  vsplit.addWidget(b1);
  vsplit.addWidget(g1);
  BoxPanel.setStretch(b1, 1);
  BoxPanel.setStretch(g1, 3);
  hsplit.addWidget(r1);
  hsplit.addWidget(vsplit);
  
  // Attach BoxPanel to document.body (could be any element)
  Widget.attach(hsplit, document.body);

  // Make sure resizing is taken care of
  window.onresize = () => { hsplit.update(); };
}

window.onload = main;
