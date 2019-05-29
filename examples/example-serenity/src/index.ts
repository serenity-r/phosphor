/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

import '../style/index.css';

import {
  DockPanel, DockLayout, Widget
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
  var dock = new DockPanel();
  dock.id = 'dock';
  
  // Create ContentWidget (right now, uses predefined function)
  var r1 = new ContentWidget('Red');
  var b1 = new ContentWidget('Blue');
  var g1 = new ContentWidget('Green');
  var y1 = new ContentWidget('Yellow');
  var w1 = new ContentWidget('White');
  
  var y2 = new ContentWidget('Yellow');
  var y3 = new ContentWidget('Yellow');

  // Add widgets in appropriate places - this can be done in any order
  dock.addWidget(r1);
  dock.addWidget(w1, {mode: 'split-right', ref: r1});
  dock.addWidget(y1, {mode: 'split-bottom', ref: w1});
  dock.addWidget(b1, {mode: 'split-bottom', ref: r1});
  dock.addWidget(g1, {mode: 'split-right', ref: b1});
  dock.addWidget(y2, {mode: 'tab-after', ref: y1});
  dock.addWidget(y3, {mode: 'tab-after', ref: y2});
  
  // Set layout
  var layout = dock.saveLayout();
  console.log(layout);
  
  var panels: DockLayout.AreaConfig[] = (layout.main as DockLayout.ISplitAreaConfig).children;
  var sizes: number[] = (panels[0] as DockLayout.ISplitAreaConfig).sizes;
  sizes[0] = 0.25;
  sizes[1] = 0.75;

  var sizes: number[] = (panels[1] as DockLayout.ISplitAreaConfig).sizes;
  sizes[0] = 0.75;
  sizes[1] = 0.25;
  
  dock.restoreLayout(layout);

  // Attach BoxPanel to document.body (could be any element)
  Widget.attach(dock, document.body);

  // Make sure resizing is taken care of
  window.onresize = () => { dock.update(); };
}

window.onload = main;
