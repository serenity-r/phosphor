Phosphor
========

[![Build Status](https://travis-ci.org/phosphorjs/phosphor.svg)](https://travis-ci.org/phosphorjs/phosphor?branch=master)

The [PhosphorJS](http://phosphorjs.github.io/) libary.

## Client-Side Library

Here are the steps to create client-side library:
 
```bash
git clone https://github.com/serenity-r/phosphor.git
cd phosphor
npm install
npm run build
```
 
The library is `examples/example-library/build/phosphor.js`.

## Example

Open the file `examples/example-library/index.html`.  This file loads the `phosphor.js` library and runs the following script:

```javascript
$(document).ready(function(){
  	// Create BoxPanel
  	var main = new phosphorjs.BoxPanel({ direction: 'left-to-right', spacing: 0 });
  	main.id = 'main';

  	// Create DockPanel
  	var dock = new phosphorjs.DockPanel();
  	dock.id = 'dock';

  	// Create ContentWidget (right now, uses predefined function)
  	var r1 = new phosphorjs.ContentWidget('Red');

  	// Add widgets in appropriate places - this can be done in any order
  	dock.addWidget(r1)
  	main.addWidget(dock)

  	// Attach BoxPanel to document.body (could be any element)
  	phosphorjs.Widget.attach(main, document.body)

  	// Make sure resizing is taken care of
  	window.onresize = () => { main.update(); };
});
```