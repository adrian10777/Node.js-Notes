// What is NODE.JS

// JS Runtime (NOT a language or a framework)
// the language is JS expcept only instead of JS running in a browser environemnt
// its running on ur machine as a service or a runtime
//it does this by using v8 js engine

//Built on the v8 JS engine (same as google chrome)
// very powerful an fast
//written in c++
// powerful and fast slow level language

// allows us to run JS code on the server

// can use JS as a server side language just we can with Python, PHP,

// What should u know before learning Node
//js fundamentals
// since ur going to be dealing with server side you are going to be dealing with HTTP quite a bit
//as youll be getting request from the client to your server and then sending back a response
// express makes this easier, but u should still understand the important HTTP code
// like status 200, 404, 500, etc even HTTP headers

//Node is also used for REST APIS and Microservices which 99% of the time they serve as JSON
// as the content.

//MVC (Mofel View Controller) pattern which is used commonly with Node 


//Why use node? why is it a good choice for server side tech over lets say PHP, Python?
//Node is extremely fast, efficient, highly scalable because its event driven and runs ona single loop,
// and its none blocking i/o model
//popular especially in startups, full stack jobs that look for people that know node
//mean stack, myrn stack, used for front end vue, react, angular, cause u can use language on both sides
//same language JS front end and Backend, which can be an advantage

//Node JS is non-blocking and its asynchronous, works on a single thread and uses non blocking i/o
// or input-output calls
//PHP is synchronous and runs on multiple threads so everytime a request is made it spawns a new thread and these threads
// they take up system memory and can eventually max out whatever the memory
//load handles, so since these languages are synchronous and asked to
//essentially sit and wait for one process to complete
// before starting the next, now node js works in an asynchronous way, and its non blocking on a single thread
// and this thick single thread can support tens of thousands connect of connections
//which are held in whats called an event loop
// and this optimizes throughput and scalability in apps with many i/o operations
// we dont want ot use node is with cpu intensive apps, so long runnign calcs

//Nodes Event Loop
  // single thread, and events are ran async, basically when an event is triggered a callback fires
  // this way system doesnot have to run a process sit and wait for it to end and then run the
  //next like it does in many other synchronous languages. its simply fires an event or a process iand
  //moves on. once vent is fulfille dit runs in a loop.

//projects node is good for
  // anything that is not cpu intensive
  //i/o operations are async and usually that is making a request to a server
  //sending data to a server getting a response these are i/o operations
  // running CPU calculations that can block the whole server and can make that application very slow 
  //so not really good for those types of things
  //so REST APIS and microservices node is great for
  // a lot of times youll be building a backend API iwth node where u wont even be serving HTML pgs 
  // ull be serving JSON, ull do your db interaction with node.js and it works with any db
  // u can use relations db's, however it svery popular MongoDB to use with Node,
  // Mongo, is very fast and scalable
  //real time services so things like chat apps, node is good for, CRUD apps (blogs, shopping carts
  // basically any apps where ur just fetching stuff from the db displaying it youre updating things like that
  //node is good for as well
  // as well as tools and utilities as long as they are not CPU intensive.

// When u download and install Node JS u get something called npm -> Node package manager
  // used to install 3rd party packages or modules such as frameworks, libraries, and smaller toolds
  // when u install package it gets stored in folder called node_modules, which is created auto when u install something
  // any package or dependency u install will get listed in a file called package.json
  //which every node project should include it holds info about ur app, name, version
  //and all dependencies which are packages ur app needs to be able to run
  // u can also create npm scripts to run certain tasks such as web servers and we are going to be looking into this stuff

  // common commands 
    //npm init - generates package.json file
    //npm install express -- popular web framework (local install in ur app folder)
      // however u can install thing globally in system by adding -g flag
      // puts it on system so u can run commands or w.e it includes u can run that anywhere in OS
    
 // Node Modules
    //Node modules are a huge part of node, node has a large set of core modules
    // that it comes with, we're going ot be looking at a nunch of the common ones
    // u also have modules or packages u install with npm and then u can also create ur own modules
    // which are simply files that have an export
    // this way u can include variables, functions, classes, or anything else from 1 file, u can include in another
    // we're going to do this and look at syntax
    // create var, set it to require, w.e module u want, in this case its a path module which is a 
    // node core module. if u want to make ur own file, u can create var require and set path to file
    // ./ means tha this this is my file in same folder

  // node comes with a repl = read event print loop = allow sus to run js directly in console
  // just write node and write js

  //first thing u want to do is create a package.json file
  // run npm init

  //Biggest purpose of package.json is to store all ur dependencies
  // so if ur app uses something u install from npm it needs to be listed here
  // cause if u go to another computer or server in another app ur going to run npm install, and it will
  // install all packages that are listed
  // UUID to generate ransom ids - npm install uuid

  // u can also have dev dependencies which u need for development
  // node Mon, we dont have to keep restarting our server - npm install -D nodemon

  // when ur ready to deploy or move this app somewhere else u dont include the node modules, u delete it then run npm install

  //Package-lock json - this tracks all of our dependecies with the versions 


//CORE MODULES

//Path modules
  // used often, used to work with file directories paths as u can see and the documentation
  // the doc for these modules has all diff methods available
  // basename shows u the params that it takes, what it returns, example (good docs)

  