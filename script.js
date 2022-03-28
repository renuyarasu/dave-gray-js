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

import playGuitar from './guitars.js';
import {shredding as shred, plucking as pluck} from './guitars.js';


console.log(playGuitar());
console.log(shred());
console.log(pluck());


