## The first time when js code enters to engine the following step will happen

1. P**arsing ⇒ during the parsing process the code is parsed into a data structured called as Abstract Syntax Tree ⇒ it works by splitting each line of code into pieces that are meaningful to the language like const or functions keywords and saving all this pieces into the tree in a structured way . This step also check if there are any syntax errors . And the resulting tree will later be used to generate the machine code**
2. **Compilation ⇒  which takes generated AST and compiles it into machine code** 
3. **This machine code ⇒ then gets executed right away , Execution context happens in the javascript call stack.  So modern js engines have some clever optimization strategies . So what they do ?**
    1. **CREATE a very clever unoptimized version of machine code in the beginning just so it can start executing as fast as possible then in the background this code being optimized and recompiled during already running program execution and this can be done multiple times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution of course .**
    2. **All of this optimization happen in some special threads inside the engine that we cannot access from our code so completely separate from the main thread that is basically running in the call stack executing our own code** 

![Screenshot (11).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79526d85-ec71-4075-8996-894a55d0fff0/Screenshot_(11).png)

## **What is javascript runtime ?**

### Particular the most common one is the browser .

**We can imagine a javascript runtime as a big box or big container which includes all the things that we need  to use javascript . Javascript runtime is always javascript engine**

## !! Without engine there is no runtime and there is no  javascript at all, How ever the engine alone is not enough in order to work properly, we also need to access to the *web apis ⇒ everything related to the dom or timers or even the console.log , Essentially* web apis are functionalities provided to the engine but which are not actually not part of the javaScript language itself, javascript simply gets access to these apis through to the global window object . It makes sense that web apis are also part of the runtime because again a runtime is just like a box that contains all the javscript related stuff that we need !!

## Also typically javascript runtime also includes a so called *callback queue  ⇒* this is a data structure that contains all the callback functions that are ready to be executed, for example we attach event handler functions to dom elements like a button to react to certain events right and these event handler functions are also called callbacks functions . How it works behind scenes , so the first thing after the event  is that callback function is put into callback queue , then when call stack is empty the CB function is passed to the stack that can be executed , this happens something called event loops , So basically the event loop takes CB functions from the callback queue and puts them in the callstack so that they can be executed . THE event loop ⇒ how the javascript non-blocking concurrency model is implemented

 

# The different runtime of the javascript is the node js

![Screenshot (2).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab97976b-137b-4228-b758-956a66ed4b1e/Screenshot_(2).png)

# Execution Context in Js

### Execution context ⇒ it is abstract concept , it is environment in which piece of Javascript is executed

![Screenshot (1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e1795fd-cb70-4738-b310-937d2deda657/Screenshot_(1).png)

## So after compiling our code will be ready to execute , so what is happen then the global execution context will be created

### Global execution context ⇒ this is created for top level code ⇒ this code is basically code which is not inside of the function. So at the beginning outside code will be executed

## `After that 👆, Function execution context will start :`

### So , for each function one new execution context is created , which is containing all the information that is necessary to run exactly that function , and same goes for methods of course because they are simply function attached to objects

# `ALL OF THIS EXECUTION CONTEXT MAKE THE CALL STACK`

## So after all function done executing , the engine will basically keep waiting for callback function to arrive , so that it can executing these , For example : a CB function associated with a click event and remember that it is  the event loop who provides  these new callback function

![Screenshot (12).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5ad92706-050a-48c3-bcd7-b2ce068b395b/Screenshot_(12).png)

# EXECUTION CONTEXT IN DETAIL :

## What is inside EXECUTION CONTEXT ?

### Inside of every ( *EX context* ) ⇒ is so called VARIABLE ENVIROMENT ⇒ inside of this all environment and function declarations are stored , and there is also argument object ⇒ this object contains as the name says all the arguments that was passed into the function that current execution context belongs to. Remember that each the functions gets their own *EC context as soon it is called . SO basically all the variables that are somehow declared inside a function will end up in its variable environment .* However a function can also  access variables outside of the function , and this is HAPPEN SOMETIHNG CALLED SCOPE CHAIN . Basically scope chain consist of references to variable that are located outside of the  current function and to keep track of this scope chain it is stored in each execution context finally each context also gets special variable called this keyword . Now the content EX context so variable environment ; scope chain ; this keyword ; ⇒ is generated in the so called creation phase which happen right before execution . IMPORTANT is that execution contexts belonging to arrow function do not get their own argument keyword nor do they get the this keyword , instead they can use arguments object and this keyword from their closest regular parent . These are necessary in to run each function as well as the code in top level

## ESSENTIAL ⇒ none of the values actually become known during the creation phase but only in the execution phase

![Screenshot (13).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57edf328-dc1a-489f-8fda-f3e582024990/Screenshot_(13).png)

# CALL STACK together with MEMORY HEAP makes up javascript engine itself

## What is call stack and heap ?

### Call stack  ⇒ is where our code is executed , actually executed something called execution context . ESSENTIAL that is place where execution context get stacked on top of each other in order to keep track of where we are in the program execution . SO execution context that is on top of the stuck is the one that is currently running and when it is finished running it will be removed from the call stack and execution will go back to the previous  execution context  .

![Screenshot (14).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf13de14-f970-414e-b614-00306ac7e7d2/Screenshot_(14).png)

## Heap ⇒ is an unstructured memory pool which stores all the objects that our application needs A heap is **a tree-like data structure where each node must be ordered with respect to the value of its children.** This ordering must persist throughout the entire heap. Put simply, a parent node's value must always be greater (or less) than its children's values. There are two types of heap: max heap and min heap.

## SCOPE AND *SCOPE CHAIN*

### What is scoping ?

### Scoping controls how our programs variables are organized and accessed by the javascript engine , So basically scoping asks question where do variables live or where can we access a certain variable and where not . LEXIAL SCOPING ⇒ it means that the way variables are organized and accessed is entirely controlled by the placement of function and blocks in the programs code , for example the function which is written inside another function has access to variables other parent function . Variable scoping is influenced by where exactly we write our functions and code blocks

## Scope → is the space or environment in which certain variable is declared simple as that and in the case if functions that is essentially the variable environment which is stored in the functions execution context . Difference between *scope* and variable environment ⇒ answer is that for the case of functions it is basically the same. JS we have the global scope ; function scope and block scope.

### Scope of a variable ⇒ is basically the entire region of our code where certain variable can be accessed now some people use the word scope for all of this , but i like to define all these concepts that we have here in a clear way because there are actually subtle differences for example, if you close look at , it scope is not the same as scope of a variable

![Screenshot (15).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b020b21d-9f7c-4b88-9a94-535582ed3aaf/Screenshot_(15).png)

## `Three different type of scoping`

### **GLOBAL SCOPE**

### This is for top level code, that are declared outside of any function or block

### **FUNCTION SCOPE**

### These scope are only accessible inside that function, this is also called *local scope .* This is same as functions variable environment  but we still need to give it the name of scope in the context because scopes also create scopes , Example,  var = 2037 inside calc age function and therefore we can  use it  in the function to do calculations but outside of the function we can not access we would have reference error

### BLOCK SCOPE (ES6)

### They are almost same but , scopes only apply to variables declared with let or const ⇒ are restricted to the block in which they were created , if we use var keyword then variable would actually still be accessible outside of the block .

### IMPORTANT, in es6 all of the functions are block scoped only in strict mode

![Screenshot (16).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e43e957-55ea-449b-a2a1-c070600b6d80/Screenshot_(16).png)

## SCOPE CHAIN ⇒ works only in upwards not sideways

![Screenshot (18).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17e2e7a4-20eb-44f6-9063-3bce3ea52dc6/Screenshot_(18).png)

## SCOPE CHAIN VS. CALL STACK

![Screenshot (20).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4f8a2cbe-5053-427a-bbe5-3fba5d42c8b0/Screenshot_(20).png)

# Summary

- ************************Scoping asks the question “WHERE DO VARIABLES LIVE ” or “WHERE CAN WE ACCESS a certain variable, and where not?************************
- There are 3 types of scope in Javascript : the global scope , scopes defined by functions and scopes defined by blocks;
- Only let and const variables are block scoped . Variables declared with var and up in the closest function scope
- In javascrirpt, we have lexical scoping , so the rules where we can access variables are based on exactly where in the scope code functions and blocks written;
- Every scope always have access to all the variables from all its outer scopes . This is scope chain !
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it is looking for . This is called variable look up;
- The scope chain is one way street will never , ever have access to the variables of inner scope
- The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes;
- The scope chain has nothing to do with the order in which function were called . it does not affect the scope chain at all!

![Screenshot (21).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/703f1653-5e4c-49db-924b-0f8292dedadf/Screenshot_(21).png)

# Hoisting in JS

## *Hoisting ⇒* basically makes some types of varables accessible or let say usable in the code before they are actually declared . “Many people simply defined hoisting by saying that variables  are magically lifted or moved top of their scope ”,  for example : to the top of function and that is actually what is hoisting looks like on the surface but behind the scenes that’s in fact not what happens , instead behind the scenes the code is basically scanned for variable declarations before it executed so this is happens during the so called creation phase of the execution context , then for each variable that is found in the new code new property is created in a variable environment object and that is how hoisting really works. Hoisting does not work the same for all variable types .

|  | HOISTED | INITIAL VALUE   | SCOPE |
| --- | --- | --- | --- |
| function declaration | ✅ yes | Actual function | Block |
| var variables  | ✅ yes | Undefined  | Function |
| let and const variables | 🚫 no | <uninitialized>, TDZ | Block |
| function expressions and arrows | Depend if using var or / let |  |  |
|  |  |  |  |

> **Unlike the functions when we try to access a var variable before it is declared in the code we do not get the declared  value but we get undefined . Now on the other hand *let* and *const* variables are not hoisted , technically they are actually hoisted but their value basically set to uninitialized so there is no value to work with at all .Instead we say that variables are placed in a so called *Temporal Dead Zone*  or (TDZ) which makes it so that we can not access the variables between the beginning of the scope and the place where the variables are declared , so as consequences if we attempt to use a let or const variable before it is declared we get an error also keep in mind that let and const are block scoped so they exist only in the block in which they were created and all this factors together is basically the reason why let and const were first introduced into the language and why we use them now instead of var in modern javascript . Function expression and arrow functions how does hoisting work for these?  It depends if they were created using var or const or let , because these functions are simply variables and so they behave the exact same way as variables in regard to hoisting this means that a function expression or arrow function created with var is hoisted to undefined but if created with let or const it is not usable before it is declared in a code because of the temporal dead  zone so again just like normal variables right and this is actually the reason why ? that we cannot use function expressions before we write them in the code unlike function declarations**
> 

![Screenshot (22).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/983c7784-807e-41b9-9791-a1693f5fee75/Screenshot_(22).png)

## Temporal dead zone , let and const

![Screenshot (24).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c49b61c-a267-45d0-99a1-2cabc015565f/Screenshot_(24).png)

 ****

| GLOBAL EXECUTION CONTEXT | Function Execution Context |
| --- | --- |
| Creates a Global Variable object that stores function and variables declarations. | Doesn't
 create a Global Variable object. Rather, it creates an argument object 
that stores all the arguments passed to the function. |
| Creates the `this` object that stores all the variables and functions in the Global scope as methods and properties. | Doesn't create the `this` object, but has access to that of the environment in which it is defined. Usually the `window` object. |
| Can't access the code of the Function contexts defined in it | Due to scoping, has access to the code(variables and functions) in the context it is defined and that of its parents |
| Sets up memory space for variables and functions defined globally | Sets up memory space only for variables and functions defined within the function. |
|  |  |
|  |  |

## **Conclusion**

JavaScript's Execution Context is the basis for understanding many other fundamental concepts correctly.

The
 Execution Context (GEC and FEC), and the call stack are the processes 
carried out under the hood by the JS engine that let our code run.

Hope now you have a better understanding in which order your functions/code run and how JavaScript Engine treats them.

As a developer, having a good understanding of these concepts helps you:

- Get a decent understanding of the ins and outs of the language.
- Get a good grasp of a language’s underlying/core concepts.
- Write clean, maintainable, and well-structured code, introducing fewer bugs into production.

All this will make you a better developer overall.

## [https://www.scaler.com/topics/course/javascript-beginners/](https://www.scaler.com/topics/course/javascript-beginners/)

-