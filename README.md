# Sneaker City Backend!

Sneaker City is build using **node.js** and **express** and used **mongodb** as its datastore.Its primary purpose is to serve and receive through RESTAPi from and to the Sneaker City front-end. It also contains a script which used to load the initial data called **dummyLoader.js** which can be run using the commands that we will mention in the comming sections

# App dependencies

Sneaker City used a couple of number of node dependencies imported as node modules. Here is the list:

-  express
-  mongoose
-  nodemon
-  dotenv
-  jsonwebtoken
-  bcryptjs
   The List may grow as the application grows but for the moment those the main external modules add to the existing one from **nodejs** itself.

## Getting application to your local environment

Get the Sneaker City app is simple. You only need to clone the application from this repository `https://github.com/phyntom/snkshop-backend` and you are ready to go.

## Running the application on your local environment

This is also simple but you need to make sure that you have mongodb installed on your local machine but you can also change and use any could mongodb instance you may have access to.The configuration for mongodb are simple cause you only need the mongodb URI which I will provide the sample the below section.

-  [x] `git clone https://github.com/phyntom/snkshop-backend.git`
-  [x] `cd snkshop-backend`
-  [x] ` npm install`
-  [x] `touch .env`
-  [x] `echo "NODE_ENV=developpment \nPORT=6000\nDB_URI=mongodb://127.0.0.1:27017/snkshop?poolSize=20\nJWT_SECRET_KEY=snkshop20101156" >> .env`
-  [x] `node dummyLoader.js -d`
-  [x] `node dummyLoader.js -im`
-  [x] `npm run start`
       If you want to troubleshoot you can also run the application using **nodemon** in case you intend to work on it .here is the command
       `nodemon server.js`
   > Node that after running the backend you should have the following output displayed on your screen

```
mongodb://127.0.0.1:27017/snkshop?poolSize=20
the options [createIndexes] is not supported
server running in developpment on port 6000
(node:89461) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
Connected to Mongodb: 127.0.0.1
```

## Features

Sneaker City have different couple of features but the list may grow as the application is still in development mode. But for the moment let us list the most notable one that are currently operational.

> List all products
> Get product by its id
> Get all users
> Create user / register
> Get user profile
> Update the user profile

All those functionalities are available in form of REST APIs which we will push soon for anyone wishing to test and have great test of what is coming. Note that in the future release we will be having some additional functionalities like

-  Creating orders
-  Updating order
-  List orders
-  Payment Processing
-  Create Shipping
-  Update Shipping address
-  Create Products
-  Update Products
-  Add Store
-  Update Store
-  Load Products from store
-  etc

> **Note:** The **Publish now** button is disabled if your file has not been published yet.
