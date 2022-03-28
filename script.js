// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours

/* JavaScript Modules
// https://www.theodinproject.com/ && https://www.freecodecamp.org
// https://youtu.be/Q3SBogjUfMk?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
Intro
ES6 Module Basics
JS Modules are only supported on servers
Use the Live Server extension in VS Code
The script tag with type="module"
No defer needed
Strict mode by default
Create a Javascript Module
Export default
Export { firstItem, secondItem }
Export inline
Import the default export
Import { firstItem, secondItem }
Rename imports
Import the full namespace
JavaScript Class export and import example
Current browser support for modules */
// 'use strict';

// import playGuitar from './guitars.js';
// import {shredding as shred, plucking as pluck} from './guitars.js';

import * as Guitars from './guitars.js';
import User from './user.js';

const me = new User('VedaGna', 'veda@email.com');
console.log(me);
console.log(me.greet());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());


