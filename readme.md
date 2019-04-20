![GitHub](https://img.shields.io/github/license/Rubinder25/NodeHotKey.svg?style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Rubinder25/NodeHotKey.svg?style=flat-square)

# NodeHotKey
https://github.com/Rubinder25/NodeHotKey  
https://www.npmjs.com/package/nodehotkey  
This is an autohotkey like library built in NodeJs

## Features

1. Make global Macros and assign hotkeys to trigger them
2. Catch global keyboard/mouse events in your code
3. Operate keyboard,mouse and clipboard from code
# Usage
## Install
`npm install nodehotkey --save`  
follow this page to install dependencies for robot-js on your platform: http://getrobot.net/docs/usage.html

## import
`import { NodeHotKey } from 'NodeHotKey';`
## Initialize the object
```javascript
let nhk = new NodeHotKey({});
```
Currently we are passing an empty object. A Macro Config object can be passed to the constructor in order to create autohotkey like macros.
Please refer the next section for this.

## Macro
Macros are pre-defined steps that can be triggered by either pressing hotkeys or typing hotstrings. These can be defined as JavaScript objects.
### A sample macro looks like this
```javascript
let macroConfig = {
    'Name of the Macro': {
        keys: [kc._CONTROL, kc._E],
        steps: [
            { type: 'This Macro can be triggered by pressing CTRL+E\n' },
            { type: "Wait for 3 secs then press ','  " },
            { wait: 2000 },
            { pressKey: kc._COMMA },
            { releaseKey: kc._COMMA },
            { func: () => console.log('Call JavaScript functions using hotkeys') }
        ]
    },
}
```
we can then pass this macroConfig to constructor of NodeHotKey like this:-
```javascript
let nhk = new NodeHotKey(macroConfig);
nhk.startListening();
```

For more sample Marco configs  check out **[MacroSamples_NodeHotKey](https://github.com/Rubinder25/MacroSamples_NodeHotKey)**.
## Events
```javascript
nhk.on(nhk.eventTypes.keyPressed, (eventData) => {
    console.log('KeyPressed ', eventData.keyCode);
});
```
## Functions
following are the utility functions present in the package:-
```javascript
import { pressKey, releaseKey, click,
        type, paste, wait, setClipboardText, 
        getClipboardText, matchCurrentWindowTitle } from './NodeHotKey'; 
```
## Putting it all together

```javascript
import { NodeHotKey, pressKey,releaseKey, KEYCODES as kc } from './NodeHotKey';

// press key
pressKey(kc._A);
releaseKey(kc._A);

let macroConfig = {
'Name of the Macro': {
		keys: [kc._CONTROL, kc._E],
		steps: [
			{ type: 'This Macro can be triggered by pressing CTRL+E\n' },
			{ type: "Wait for 3 secs then press ','  " },
			{ wait: 2000 },
			{ pressKey: kc._COMMA },
			{ releaseKey: kc._COMMA }
		]
    },
}

let nhk = new NodeHotKey(macroConfig);

nhk.startListening();

nhk.on(nhk.eventTypes.keyPressed, (eventData) => {
    console.log('KeyPressed ', eventData.keyCode);
});

// nhk.stopListening(); // terminates the program
```
## Sample Macros
https://github.com/Rubinder25/MacroSamples_NodeHotKey

> email: mail2rubinder@gmail.com

## License
ISC

**Note:** currently Node V10 is not supported

