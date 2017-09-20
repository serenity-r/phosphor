/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

import '../style/index.css';

import {
  Widget
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
