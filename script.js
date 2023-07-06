// Difference between Null and Undefined

// Null is an actual value
// undefined is when variable is declared but it is not initialized
console.log("Type of Null: ",typeof null);
console.log("Type of undefined: ",typeof undefined);

let a;
let b = null;
console.log("Printing value in a: ",a);
console.log("Printing value in b: ",b);
// console.log(c); // Error : c is not defined

console.log("Is null==undefined? ",null == undefined); // True as it does not compare type of 2 entities
console.log("Is null===undefined? ",null === undefined); // False as it compares type of 2 entities



// ************ //



// Difference between var, let and const

// var is function scoped
// let and const are block scoped

// var can be redeclared and updated but let and const cannot be redeclared
// var and let can be updated but const cannot be reintialized, redclared or updated
// const sould always be declared with a value but let and var can be declared without a value

{
    var d = "Hello from var"
}

console.log(d);

{
    let e = "Hello from let"
    const f = "Hello from const"
    console.log(e);
    console.log(f);
}

// console.log(e); // Error : e is not defined
// console.log(f); // Error : f is not defined



// ************ //


// Explain Hoisting

/* 
Variable Hoisting:
When variables are declared using the var keyword, their declarations are hoisted to the top of their scope. 
However, only the declarations are hoisted, not the initializations. 
This means that the variable names are accessible throughout the scope, 
but their values will be undefined until the assignments are made.

Unlike variables declared with var, let and const declarations are not hoisted to the top of their scope. 
They remain in the temporal dead zone (TDZ) until the point of the block where they are declared.

Temporal Dead Zone (TDZ):
The TDZ is a phase in the code execution where variables declared with let and const exist but cannot be accessed. 
Any attempt to access them before their declaration will result in a ReferenceError. 
This helps catch potential errors and promotes better code practices.

console.log(x); // Output: ReferenceError: x is not defined
let x = 5;
console.log(x); // Output: 5

console.log(y); // Output: ReferenceError: y is not defined
const y = 10;
console.log(y); // Output: 10

Function Hoisting:
Function declarations are also hoisted to the top of their scope. 
This means that you can call a function before it appears in the code, and it will still work as expected.
*/

function hoisting(){
    console.log("Before Declaring var a: ",a);
    var a = 10;
    console.log("After Declaring var a",a);
}

hoisting(); // Output : undefined 10



// ************ //


// What is the answer to this problem?

// SetTimeout Output
function printNumbers() {
    for (var i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log("printNumbers: ",i);
      }, i * 1000);
    }
  }

// printNumbers(); // Output : 5 5 5 5 5 => Because var is function scoped and the value of i is 5 when the setTimeout is executed

function printNumbersWithLet() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        console.log("printNumbersWithLet: ",i);
      }, i * 1000);
    }
  }

// printNumbersWithLet(); //Output : 0 1 2 3 4 => Because let is block scoped and the value of i is the value of i when the setTimeout is executed

//Keep var and get the desired output 
function printNumbersWithVar() {
    for (var i = 0; i < 5; i++) {
      (function (num) { //The function here creates a new scope and the value of i is passed to the function as num
        setTimeout(() => {
          console.log("printNumbersWithVar: ",num);
        }, num * 1000);
      })(i);
    }
  }
  
// printNumbersWithVar();



// ************ //



// Difference between Map and For Each on an Array
let arr = [1, 2, 3, 4, 5];

//For Each modifies array in place
const forArr = arr.forEach((a, i) => {
  arr[i] = a + 2;
});
console.log("After For Each: ", arr);

//Map duplicates and modifies the array
//On Map you can also chain other functions such as arr.map().filter()
const mapArr = arr.map((i) => {
  return i + 2;
});
console.log("After Map", mapArr);



// ************ //



// Flatten the Array
let toFlatArr = [ 
    [1,2],
    [3,4],
    [5,6,[7,8],9],
    [10,11,12]
]; //Expected : [1,2,3,4,5,6,7,8,9,10,11,12]

let Flattened = [].concat(...toFlatArr); //Spread the array and concat it for only one level
console.log("Flattened Array: ",Flattened);

console.log(toFlatArr.flat(Infinity)); //Flat method with Infinity as argument will flatten the array to any level

// Custom function to flatten the array

function customFlatArray(arr,depth=1) {
    let res = []
    arr.forEach((a,i)=>{
        if(Array.isArray(a) && depth>0){
            res.push(...customFlatArray(a,depth-1));
        }
        else{
            res.push(a);
            // The reason for using push instead of concat is that push directly adds elements to the end of an array, 
            // while concat creates a new array by concatenating the existing array with the provided elements.
        }
    })
    return res;
}

console.log("Custom Flattened Array: ",customFlatArray(toFlatArr,1));



// ************ //



// Implement the following function - Function Chaining

const calc = {
    value: 0,
    add(num) {
      this.value += num;
      return this;
    },
    subtract(num) {
      this.value -= num;
      return this;
    },
    multiply(num) {
      this.value *= num;
      return this;
    },
    divide(num) {
      this.value /= num;
      return this;
    }
  };

console.log("Function Chaining: ",calc.add(4).subtract(1).multiply(4).divide(2).value); 



// ************ //




// Explain Call, Apply and Bind

// Call, Apply and Bind are used to change the context of a function

const person = {
    firstName: "Ashika",
    hello : function(lastName){
        console.log(`Hello ${this.firstName} ` + lastName);
    }
}

person.hello("Makam"); // Output : Hello Ashika Makam

const anotherName = {
    firstName: "Sukhesh",
}
person.hello.call({firstName:"Ashika"}," Makam"); // Output : Hello Ashika Makam
person.hello.call(anotherName," Makam"); // Output : Hello Sukhesh Makam

person.hello.apply({firstName:"Ashika"},[" Makam"]); // Output : Hello Ashika Makam
person.hello.apply(anotherName,[" Makam"]); // Output : Hello Sukhesh Makam

const myName = person.hello.bind(anotherName);
myName(" Makam"); // Output : Hello Sukhesh Makam



// ************ //



// Implicit and Explicit Binding

var obj1 = {
    name:"Ashika",
    hello: function(){
        console.log("From Implicit Binding: ",this.name);
    }
}

obj1.hello(); // Output : Ashika

var obj2 = {
    name:"Ashika",
    hello: ()=>{
        console.log("Using arrow function: ", this)
        console.log("From Arrow function: ",this.name);
    }
}
obj3 = {
    name:"Sukhesh",
}
obj1.hello.call(obj3); // Output : Sukhesh

obj2.hello.call(obj3); // Output : undefined
// Arrow functions do not have their own this.
// The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function.



// ************ //


// THIS keyword (Implicit Binding)
// What is the output of the following code?
const user = {
    name: "Ashika",
    hi(){
        return `Hi ${this.name}`;
    },
    bye:()=>{
        return `Bye ${this.name}`;
    }
}
console.log("THIS keyword without arrow function",user.hi()); // Output : Hi Ashika
console.log("THIS keyword with arrow function",user.bye()); // Output : Bye Ashika



// ************ //



// Function Composition or higher-order functions implementation
function calculate(operation, ...args) {
    switch (operation) {
      case 'add':
        return function() {
          let sum = 0;
          for (let i = 0; i < args.length; i++) {
            sum += args[i];
          }
          return sum;
        };
      case 'multiply':
        return function() {
          let product = 1;
          for (let i = 0; i < args.length; i++) {
            product *= args[i];
          }
          return product;
        };
      default:
        return null;
    }
  }
  
  const addFunc = calculate('add', 2, 3, 5);
  console.log("From higher order function call",addFunc()); // Output: 10
  
  const multiplyFunc = calculate('multiply', 2, 3, 5);
  console.log("From higher order function call",multiplyFunc()); // Output: 30



// ************ //



// Explain Infinte Currying
// Implement add(2)(3)(4)(5) = 14

function addFinite(a){
    return function(b)
    {
        return function()
        {
            return a+b;
        }
    }
}
console.log("For fixed level currying:",addFinite(2)(3)()); // Output: 5

function addInfinite(a){
    return function(b){
        if(b){
            return addInfinite(a+b);
        }
        return a;
    }
}
console.log("For infinite level currying:",addInfinite(2)(3)(4)(5)()); // Output: 14



// ************ //



// Explain Composition PolyFill

// Composition is the process of combining multiple functions to create a new function
// Result of multiplyByThree function is passed as an argument to the next function i.e subtractTwo
// Result of subtractTwo function is passed as an argument to the next function i.e addFive
// Result of addFive function is returned as the final result

// Compose evaluates from right to left whereas pipe evaluates from left to right

function addFive(a){
    return a+5;
}
function subtractTwo(a){
    return a-2;
}
function multiplyByThree(a){
    return a*3;
}

/* Here, we define a constant variable named compose using the const keyword. 
It is initialized as a function that takes in any number of arguments using the rest parameter syntax (...functions). 
This allows us to pass in multiple functions as arguments.*/

const compose = (...functions) => {
    return (args) => { // The compose function returns another function that takes in a single argument named args.
        /* Within the returned function, we use the reduceRight method on the functions array. 
        The reduceRight method iterates over the functions array from right to left (in reverse order). 
        For each function (fn), it applies the function fn to the accumulated result (arg). 
        The initial accumulated result is set to the value of args, which is the argument passed to the outer function.*/
        return functions.reduceRight((arg,fn)=> fn(arg),args);
    }
}

const pipe = (...functions) => {
    return (args) => {
        return functions.reduce((arg,fn)=> fn(arg),args);
    }
}

const evaluateCompose = compose(addFive,subtractTwo,multiplyByThree);
console.log(evaluateCompose(5)); // Output : 18

const evaluatePipe = pipe(addFive,subtractTwo,multiplyByThree);
console.log(evaluatePipe(5)); // Output : 24



// ************ //



// Implement Promise.all()

// Promise.all() takes an array of promises as an argument and returns a single promise.
// The returned promise resolves when all the promises in the array resolve.
// If any of the promises in the array reject, then the returned promise rejects.

function showText(text, s){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text);
        },s)
    })
}
//Create Polyfill for Promise.all()
const myPromiseAll = (promises)=>{
    let result = [];
    return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
            p.then(res=>{
                result[index] = res;
                if (result.length === promises.length) {
                    resolve(result);
                }
            })
            .catch(err=>{
                reject(err)
            })
        })
    })

}

// Promise.all(
//         [
//         showText("Hello",1000),
//         showText("World",2000),
//         Promise.resolve("Good Morning"),
//         ])
//     .then((res)=>{
//     console.log(res);
// })

myPromiseAll(
    [
    showText("Hello",1000),
    showText("World",2000),
    Promise.resolve("Good Morning"),
    ])
.then((res)=>{
console.log(res);
})



// ************ //



// Check .css file

// Explain Event Delegation
// Event delegation refers to the process of using event propagation (bubbling) to handle events 
// at a higher level in the DOM than the element on which the event originated. 
// It allows us to attach a single event listener for elements that exist now or in the future.

document.querySelector("#products").addEventListener("click", (e) => {
    console.log(e);
    if (e.target.tagName === "LI") {
      console.log(e.target.id);
      window.location.href = "#"+ `products/${e.target.id}`;
    }
});



// ************ //



// Implement Caching or Memoize function
const clumsyProduct = (num1,num2) =>{
    for(let i=0;i<999999999;i++){}
    return num1*num2;
}

console.time("First Call")
console.log(clumsyProduct(2,3));
console.timeEnd("First Call")

console.time("Second Call")
console.log(clumsyProduct(2,3));
console.timeEnd("Second Call")

// Implementing Memoize function
const memoize = (fn) =>{
    res = {};
    function memoizeImplementer(...args){
        if(!res[args]){
            res[args] = fn(...args);
        }
        console.log(res);
        return res[args];
    }
    return memoizeImplementer;
}

const memoizeProduct = memoize(clumsyProduct);

console.time("Firt Mem Call")
console.log(memoizeProduct(2,3));
console.timeEnd("Firt Mem Call")

console.time("Second Mem Call")
console.log(memoizeProduct(2,3));
console.timeEnd("Second Mem Call")



// ************ //



// What is the output of the following code?

console.log("a")
setTimeout(()=> console.log("b"),0); 
//setTimeout is a Web API and it is executed after the call stack is empty. It runs after complete code is executed.
//setTimeout will go to task queue and will be executed after call stack is empty
Promise.resolve().then(()=> console.log("c"));
//Promise is a microtask and it is executed before the call stack is empty. It runs before complete code is executed.
//Promise will be in priority queue and will be executed before task queue
//Call Stack -> Priority Queue -> Task Queue
console.log("d")

//Execution order:

/**
 * 1. Initially, the main script is executed, and functions are added to the call stack as they are encountered.
 * 2. Asynchronous tasks, such as setTimeout or event handlers, are registered and put into the task queue.
 * 3. If a priority queue is present, higher-priority tasks may be processed before lower-priority tasks.
 * 4. When the call stack is empty (i.e., all synchronous code has executed), the event loop takes the first task from the priority queue or the task queue (based on priority) and pushes it onto the call stack.
 * 5. The task on the top of the call stack is executed.
 * 6. If additional asynchronous tasks are encountered during execution, they are registered and put into the task queue.
 * 7. The event loop continues this process, constantly checking the call stack, priority queue, and task queue until there are no more tasks to execute.
 */

//Output: a d c b



// ************ //



// Implement LRU(Least Recently Used) Cache
class LRU{
    constructor(max=5){
        this.max = max;
        this.cache = new Map();
    }

    set(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        else if (this.cache.size === this.max){
            this.cache.delete(this.first());
        }
        this.cache.set(key,value);
    }
    first(){
        return this.cache.keys().next().value;
    }

    get(key){
        if(this.cache.has(key)){
            let value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key,value);
            return value;
        }
    }
}

const lru = new LRU(3);
lru.set(1,1);
lru.set(2,2);
lru.set(3,3);
lru.set(4,4);
lru.get(3);
console.log("LRU Cache",lru.cache);



// ************ //



const pieChart = document.querySelector("#pieChart");
document.querySelector('#rangeHandler').addEventListener("input", (e) => {
    pieChart.style = `--percentage: ${e.target.value}`;
});



// ************ //



// Lazy loading
