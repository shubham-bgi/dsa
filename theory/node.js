//Nodejs ************ Language & Framework *********** 
// All the concepts with the example - 

//Scope chain
// local mem + lexical env of it parent so you get whole scope of parent

// Closure 
// Function bundled together with its lexical scope/surrouding state
// function x(){
//     var a = 7;
//     return function y(){
//         console.log(a);
//     }
// }
// z =x();
// z();
// Uses - Module design pattern, currrying, fuction run once, memoize, maintaing state in async, setTimeout, Iterators


// - Var and let (difference) 
// 1 var can be re declared let can't
//let a = 10;
//var a = 10;
// it will throw err
// 2 let can not be accessed before declration (temporal dead zone)
// 3 let is block scoped(block is code in braces where js expect one line of code) can  not access outside the block
// 4 var is function scoped, it will overide value in same function even if redeclared
// To check different scope
// for(let i = 1; i <= 5; i++) setTimeout(()=>{console.log(i)}, i * 1000)
// for(var i = 1; i <= 5; i++) setTimeout(()=>{console.log(i)}, i * 1000)
// for(var i = 1; i <= 5; i++) {
//     function x(i) {
//     setTimeout(()=>{console.log(i)}, i * 1000);
//     }
//     x(i);
// }
// 5 const same as let but can not change value and need to be initialized as soon declared

// - Variable Hosting 
// Before running any line of code js engine go over the code and assign memmory space to the variables
// and place undefined keyword. var can be accessed before initialization 
//but let and const can't as they are in different scope

// - Event loop
//node js runtime,  have callback queue, call stack and nodeapis which interact with libuv 
// (libuv is package to handle async code, written in C) event loop is in libuv which keeps on running as long as node js is running
// any async function pops of stack and hand over to libuv which handle it in its thread pool (4) or give it to OS kernel
// once done it is pushed into callback queue if the call stack is empty event loop takes the call back function
// and push in callstack to execute

// - libuv has 4 threads can be checked by can be increased to 5 by process.env.UV_THREADPOOL_SIZE = 5
// If increased more than cpus average time per call increases as threads gets juggled by os, for cpu time 
// const crypto = require('node:crypto');
// process.env.UV_THREADPOOL_SIZE = 8;
// console.time();
// crypto.pbkdf2("password", "salt", 100_000, 512,"sha512", ()=>{console.timeLog()})
// not all async function happen on threadpool most get offloaded  to OS kernel which 
// each OS have there native async mechanism epoll for linus kqueue for osX IO completion port for windows, 
// IO is not affected by cpu cores
// const https = require('node:https');
// console.time();
// for(let i =  0; i < 1; i++) {
//     https.request('https://www.google.com/', (res)=>{
//         res.on('data', (chunk)=>{});
//         res.on('end',()=>{console.timeLog()})
//     })
//     .end();
// }
// If no native async support and the task is file io or cpu intesive it uses threadpool, 
// it can be bottleneck if all threads are busy

//  - Phases of event loop 
// is nothing but the priority of callback queue
// each run is called a tick
// there are mainly 4 Macro task queues - Timers(setInterval, setTimeout), IO operation(fs & Http module), 
// check(setImmediate), close(on close of any IO connection any call back comes here)
// there are 2 Microtask queue - process.nextTick() (process.nextTick queue) and Promises (promises microtask queue)
// order - nextTick -> Promise -> Timer -> nextTick -> Promise-> IO -> nextTick -> Promies -> setImmediate ->  nextTick -> Promise -> close cb 
// Microtask queue are checked everytime in between main queues

// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start(); // start foo bar zoo baz

//- Timer function (all functions name ) 
// setTimeout(()=>{console.log('showup after 1 second')}, 1000, ['anyarguments']);
// setInterval(()=>{console.log('runs every 2 seconds')}, 2000, ['anyarguments']);
// setImmediate((x,z)=>{console.log('run asap', x,z)}, 5,7)

//- Immediately Invoked Function Expression 
// These were used previously before let and const when you wannt to give scope to a variable
// First paranthaes make function an expression second calls the function
// any variable inside the function won't pollute ouside scope or the global scope
//var a = 2;
// (z = function (a = 3) {
//     console.log(a);
// })()
// console.log(a);
// z(4)

//- Token Mechanism (JWT token) *****************************
// Before we had sessions and keep the state of sessionns in database, but due to distributed or microservice architecture
// doing this is difficult as the have to have some shared common server to verfiy the  session id in the request
// JWT is one where we encrypt non confidential user info and identifier in json and enncrypt it with our secret key
// there are various encryption method that will be available in header part of JWT
// there are 3 parts header payload and signature. signature changes if ay change in header or payload
// it is base64 encoded before sended in url
// refresh token is something send along with jwt in case one want to refresh token whenever token expires
// refesh token is basically for better user experience so they dont have to type email and password whenever jwt expires


// - Streams (extension of event emiter class)
// A stream is a sequence of data moved from one point to another
// work  with data in chunks instead of whole file being loaded into memory
// createReadStream and createWriteStream can be used of fs module
// if you want to copy a file you dont want to load entire contents to memory before pasting
// 4 type of streams - readable stream, writeable stream, duplex stream(both read and write), transform stream(modify data)
// http module request is read stream, and response is writestream

// read a file
// const {createReadStream} = require('fs');
// const readQues = createReadStream('./ques.txt', {encoding:'utf-8', highWaterMark: 64 * 1024});
// readQues.on('data',  console.log)

// copy file in chunks
// const {createReadStream, createWriteStream} = require('fs');
// const readQues = createReadStream('./ques.txt', {encoding:'utf-8', highWaterMark: 64 * 1024});
// readQues.on('data',  (chunk)=>{createWriteStream('./copy.txt').write(chunk)})
// readQues.pipe(createWriteStream('./copy.txt')) // last line can be this

// - Pipes
// const {createReadStream, createWriteStream} = require('fs');
// const zlib = require('node:zlib');
// const readQues = createReadStream('./ques.txt', {encoding:'utf-8', highWaterMark: 64 * 1024});
// readQues.pipe(zlib.createGzip()).pipe(createWriteStream('./ques.txt.gz'))

// - Events module (Observer pattern)
// an action/occuurence that we can respond to
// with event module we can make our own events and respond to in non blocking manner
// createWrtieStream, createReadStream, process are extended event class

// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();
// emitter.on('order-placed', (size, toppings)=>{console.log('Order received!', '\nSize -', size, '\nToppings -', toppings)});
// emitter.on('order-placed', (size)=>{if(size==='large') console.log('Serve a complimetary drink')});
// emitter.emit('order-placed', 'large', 'mushroom');
// emitter.emit('order-placed', 'medium', 'tomato');
