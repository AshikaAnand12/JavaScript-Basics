// https://www.youtube.com/watch?v=wnYKH2dO620
// https://www.youtube.com/watch?v=Ypp64J5KAKA
// https://www.youtube.com/watch?v=t3qZR6Qjy-c

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
// const should always be declared with a value but let and var can be declared without a value

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



// Spread operator
// Spread operator is used to spread the elements of an array or object

// Write a function to add an element to an array

// Using push - this will mutate the original array
let numArray = [1,2,3,4,5];
const addElement  = (a,e)=>{
    a.push(e);
    return a;
}
console.log("Using push: ",addElement(numArray,6));

// Using spread operator - this will not mutate the original array
// This is a PURE function
let numArray1 = [1,2,3,4,5];
const addElement1  = (a,e)=>{
    return [...a,e];
}
console.log("Using spread operator: ",addElement1(numArray1,6));
console.log("Original Array: ",numArray1);



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

regularFunction(); // Output: regularFunction is hoisted!
function regularFunction() {
    console.log("regularFunction is hoisted!");
}
// The above code is equivalent to:
function regularFunction() {
    console.log("regularFunction is hoisted!");
}
regularFunction(); // Output: regularFunction is hoisted!



Summary:
1. Var variables bubbles to the top of the file or function and let and const variables stay where they are.
2. Functions also bubble to the top of the file.
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



// Different looping techniques
// Write code to give array of names from the given array of objects

let users = [
    {
        id : 1,
        name : "Ashika",
        isActive : true,
        age : 22

    },
    {
        id : 2,
        name : "Sukhesh",
        isActive : true,
        age : 20
    },
    {
        id : 3,
        name : "Sneha",
        isActive : false,
        age : 99
    }
]

let names = []
for(let i=0; i<users.length;i++){
    names.push(users[i].name);
}
console.log("For Loop: ",names);

let names1 = []
for(let i in users){
    names1.push(users[i].name)
}
console.log("For loop: ",names1);

const uname = []
users.forEach((user)=> uname.push(user.name))
console.log("For each: ",uname)

const username = []
users.map((user)=> username.push(user.name) )
console.log("Map: ",username)

// IMPORTANT IMPORTANT IMPORTANT
const uName = users.map((u)=> u.name)
console.log(uName)

const u = {
    id: 4,
    name: "S",
    isActive: true,
}

users.push(u);
console.log("Pushing(Appending) a new value to the array",users);



// ************ //



// Conditional statements
// If and Filter
const ifusers = []
for(let i =0; i< users.length;i++){
    if(users[i].isActive){
        ifusers.push(users[i].name);
    }
}
console.log("If condition on the array: ",ifusers);

// const filteredusers = users.filter((user=> user.isActive==true)) // to return the entire objects
const filteredusers = users.filter((user=> user.isActive==true)).map((user)=> user.name); // to return an array of names
console.log("Use of .filter on an array: ",filteredusers);

// Check if the given name for the user is active or not

const isActiveUser = (name,users)=>{
    let flag = false;
    for(let i=0;i<users.length;i++){
        if(users[i].name === name){
            flag = users[i].isActive;
        }
    }
    return flag;
}
isActiveUser("Sneha",users) ? console.log("User is active") : console.log("User is not active");

// Write the same in single line
// .some iterates through an array of objects. It returns true if any of the elements in the array satisfies the condition.
const isNameExist = (name,arr) => arr.some((el)=> el.name === name);
isNameExist("Ashika",users) ? console.log("User is active") : console.log("User is not active");

// .find iterates through an array of objects. It returns the first element that satisfies the condition
//  In JavaScript, certain values are considered falsy, such as null, undefined, 0, NaN, an empty string (""), and false. 
// Any other value is considered truthy.
// So Boolean(el) will return true if el is not null, undefined, 0, NaN, an empty string (""), and false.
const FindNameExist = (name,arr) => {
    const el = arr.find(el => el.name === name)
    return Boolean(el) ? console.log("User is active") : console.log("User is not active");
}
FindNameExist("Ashika",users) 

//.findIndex
const FindIndexNameExist = (name,arr) => {
    let elIndex = arr.findIndex(el => el.name === name)
    return elIndex > -1 
}
FindIndexNameExist("Ashika",users) ? console.log("User is active") : console.log("User is not active");



// ************ //



// Set : Set is a collection of unique values
// Remove all duplicates from the array
const arrays = [1,2,2]
const uniqueArray = (arr)=> {return [...new Set(arr)];}
const uniqueArray1 = (arr)=> [...new Set(arr)]

// Difference in writing it as functions and variables is that you can pass any array as an argument to the function and get the unique values
// But for assigning directly to a variable as below, it is fixed to the variable "arrays"
const uniqueArray2 = [...new Set(arrays)]
console.log("Unique Array: ",uniqueArray(arrays));

// Same without using Set
const uniqueArray3 = (arr)=>{
    let res = []
    arr.forEach((item)=>{
        if(!res.includes(item)){
            res.push(item);
        }
    })
    return res;
}
console.log("Unique Array without using Set: ",uniqueArray3(arrays));



// ************ //



// Destructuring an object by using {}
// An object with properties
const person1 = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuring the object properties into variables
const { n, age, city } = person1;

console.log(n); // Output: John
console.log(age);  // Output: 30
console.log(city); // Output: New York


// ************ //



// Sorting
// Sort the users array based on age
// Sort operation in js mutates the original array
// Sort function takes 2 arguments that it wants to compare and 
//          returns 0 if they are equal, -1 if first argument is smaller and 1 if first argument is greater
users.sort((u1,u2)=> u1.age < u2.age ? -1:1)
console.log("Sort array in place using .sort(): ",users);

users.sort((u1,u2)=> u2.age - u1.age)
console.log("Writing sort differently: ",users);

// Sort array of objects by authors last name
const books = [
    {
        name: "Book1",
        author :"Sukhesh Makam"
    },
    {
        name: "Book2",
        author :"Ashika Anand Babu"
    },
]
books.sort((book1,book2)=>{
    const l1 = book1.author.split(" ")[1];
    const l2 = book2.author.split(" ")[1];
    return l1<l2 ? -1:1;
})
console.log("Sort array of objects by authors last name: ",books);


// To avoid mutation, use spread operator to create a new array and then sort it
let sortedusers = [...users].sort((u1,u2)=> u1.age < u2.age ? -1:1)
console.log("Copy array into new array using ... and then sort : ",sortedusers);

// To do multiple tasks such as:
// 1. Sort the array based on age
// 2. Filter the array based on isActive
// 3. Map the array to get only names

const mul_task_names = users
                        .sort((u1,u2)=> u1.age < u2.age ? -1:1)
                        .filter((u)=>u.isActive)
                        .map((u)=>u.name);
console.log("Sorting, filtering and looping on the same array : ",mul_task_names);



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
            // customFlatArray(a,depth-1)
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

let res = []
function flattenN(arr,n){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]) && n>0){
            flattenN(arr[i],n-1);
        }
        else{
            res.push(arr[i]);
        }
    }
    return res;
}
console.log("Flattened Array using for loop: ",flattenN(toFlatArr,2));


// ************ //



// Callback vs promises vs async await
// Callbacks are functions that are passed as arguments to other functions
const function1 = (name,callback)=>{
    console.log("Function 1: ",name);
    callback();
}
function1("Ashika",()=> console.log("In Callback function"));



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

obj2.hello.call(obj3); // Output : undefined because
// Arrow functions have a special behavior regarding the this keyword - they do not have their own this context and instead inherit it from the surrounding lexical scope. 
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
console.log("THIS keyword with arrow function",user.bye()); // Output : Bye 



// ************ //



// Higher-order functions implementation
// A higher-order function is a function that takes one or more functions as arguments, returns a function as a result, or both. 
// In this case, the calculate function takes two arguments - the operation and the rest parameter ...args. It then returns a function based on the provided operation.

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



// Function composition example
const addF = calculate('add', 2, 3, 5);

const double = (x) => x * 2;
const subtractTen = (x) => x - 10;

const composedFunc = (x, y) => subtractTen(double(addF()));

const finalResult = composedFunc(5, 3);

console.log(finalResult); // Output: 10 (result of (5 + 3 + 2) => 10 => double => 20 => subtractTen => 10)



// ************ //



// Closure
// Closure is a function that has access to the parent scope, even after the parent function has closed
// Closure functions have access to all properties of the parent function
function adder(x){
    return function(y){
        return x+y;
    }
}
const addval = adder(5);
console.log("Adder(x) returns a function: ",addval);
console.log("In Closure: ",addval(10));

// Create a counter function which has an intcrement and get value function
// Increment function increments the counter value by 1
// Get value function returns the counter value
function counter(){
    let count = 0;
    return {
        increment : (val=1) =>{
            count+=val;
        },
        getValue : () =>{
            return count;
        }
    }
}

const c = counter(); // c is a closure function
console.log("In Closures: ")
console.log(c.getValue());
c.increment();
c.increment(2)
console.log(c.getValue());

// See the Scopes of c
console.dir(c.getValue);

// Interview Question : Create a function that will store secret string and it will just return it when function called
// This should be done using CLOSURE

function secretString(){
    const s = "Secret";
    return ()=> s;
}

console.log(secretString()());
const s1 = secretString();
console.log(s1());



// ************ //


// Currying - curring is a function that takes one argument at a time and returns a new function that accepts the next argument
// Callable changes from f(a,b) to f(a)(b)
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



function getNames(obj){
    let res = []
    for(let i=0;i<obj.length;i++){
       if(obj[i].name){ // if(obj[i].hasOwnProperty("name"))
            res.push(obj[i].name)
       }
    }
    return res
}
console.log("getNames: ",getNames([
    {a:1},
    {b:2},
    {name:"John"},
    {name:"Jen"},
]));



// ************ //



// Implement promise.all()

const promiseAll = (promises)=>{
    let res = []
    let counter = 0
    return new Promise((resolve,reject)=>{
        promises.forEach((p,i)=>{
            p.then(()=>{
                res[i]=p
                counter++
                if(counter === promises.length){
                    resolve(res)
                }
            }).catch(reject)
        })
    })
}

// return a promise instead of the res

const promiseALL = (promises)=>{
    let res = []
    return new Promise((resolve,reject)=>{
        promises.forEach((p,i)=>{
            p.then(()=>{
                res[i]=p
            }).catch((reject)=>{return reject})
        })
        resolve(res)
    })
}

// test promiseAll and promiseALL
promiseAll([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]).then((res)=>console.log(res))
promiseALL([Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]).then((res)=>console.log(res))



// ************ //



// Implement deep equals

const deepEquals = (val1,val2) => {
    // for primitive datatype variables
    if(typeof val1 !== 'object' && typeof val2 !== 'object'){
        const isNanVal1 = isNaN(val1) && typeof val1 === 'number'; // since isNan('a') will return true for string, so we check if it is a number
        const isNanVal2 = isNan(val2) && typeof val2 === 'number';
        if(isNanVal1 && isNanVal2) return true // if both are NaN then return true
        return val1 === val2 // else return the comparison
    }

    // For arrays
    if(Array.isArray(val1) && Array.isArray(val2)){
        if(val1.length !== val2.length) return false
        for(let i=0;i<val1.length;i++){
            if(!deepEquals(val1[i],val2[i])) return false
        }
    }

    // For objects
    const val1Keys = Object.keys(val1);
    const val2keys = Object.keys(val2)
    if(val1Keys.length !== val2keys.length) return false
    for(let key in val1Keys){
        if(!val2keys.includes(val1Keys[key])) return false 
    }

}



// ************ //



function updateTimer(isoDate,timerInfo){
    const date = new Date(isoDate);
    const timeLeft = date - Date.now(); // in milliseconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // seconds * minutes * hours * days
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24); 
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    timerInfo.days = days;
    timerInfo.hours = hours;
    timerInfo.minutes = minutes;
    timerInfo.seconds = seconds;
}

const timerInfo = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
}

updateTimer("2023-08-02T00:00:00.000Z",timerInfo);
console.log("timerInfo: ",timerInfo);



// ************ //



// What is a Module Pattern - Closures

// The Module pattern encapsulates "privacy", state and organization using closures. 
// It provides a way of wrapping a mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer's interface. 
// With this pattern, only a public API is returned, keeping everything else within the closure private.

var Module = (function(){
    function privateMethod(){
        // private
        console.log("privateMethod")
    }
    return {
        publicMethod: function(){
            // public
            // has access to privateMethod()
            console.log("publicMethod")
            privateMethod()
        }
    }
})()

Module.publicMethod()



// ************ //



// Once Polyfill - Closures
function once(func,context){
    let ran ;
    return function(){
        if(func){
            ran = func.apply(context || this, arguments) // apply is giving our func a new context and the arguments if any
            func = null;
        }
        return ran;
    }
}
const hello = once(() => console.log("hello"))
hello()
hello()

const argHello = once((a,b)=>console.log(a,b))
argHello(1,2)
argHello(3,4)


// Another Example

var once = function(fn) {
    let val = 0
    return function(...args){
        if(val==0){
            val = val+1
            return fn(...args);
        }
        else{
            return undefined
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */



// ************ //



// Implement a debounce function

// Create a button ui and add debounce function to it
// show button pressed X times when button pressed
// Show triggerd Y times after 800 ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_press");
const count = document.querySelector(".increment_count");

var pressedCount = 0
var triggeredCount = 0



// Create debounce polyfill - Custom debounce function
const myDebounce = (cb,delay)=>{
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{cb(...args)},delay)
    }
}

const myThrottle =(cb,delay)=>{
    let last = 0;
    return function(...args){
        let now = new Date().getTime()
        if(now-last < d) return
        last = now
        cb(...args)
    }

} 

// const debouncedCount = _.debounce(()=> count.innerHTML = ++triggeredCount,800)
// const throttleCount = _.throttle(()=> count.innerHTML = ++triggeredCount,800)
// const debouncedCount = myDebounce(()=> count.innerHTML = ++triggeredCount,800)
const throttleCount = myThrottle(()=> count.innerHTML = ++triggeredCount,800)

btn.addEventListener("click",()=>{
    btnPress.innerHTML = ++pressedCount;
    // count.innerHTML = ++triggeredCount;
    // debouncedCount()
    // throttleCount()
    // debouncedCount()
    throttleCount()
    
})
