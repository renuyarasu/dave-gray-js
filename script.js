// JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours
console.clear();
// JSON | JavaScript Object Notation
/*
In this article, we'll look at fundamental JavaScript object syntax, and revisit some JavaScript features that we've already seen earlier in the course, reiterating the fact that many of the features you've already dealt with are objects.
JSON is used to send and recieve dada.
JSON is a text format that is completly language dependent.
Meaning JSON is used to send & receive data in may languages (csharp, python,...)
*/

const myObject = {
    name: 'VedaGna',
    hobbies: ['eat', 'sleep', 'code'],
    hello: function () {
        console.log('Hello World!');
    }
};

// console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);

const sendJSON = JSON.stringify(myObject);
console.log(sendJSON); // {"name":"VedaGna","hobbies":["eat","sleep","code"]}
console.log(typeof sendJSON); //string
console.log(sendJSON.name); // undefined