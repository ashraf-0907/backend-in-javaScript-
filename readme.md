# References and Links to learn about the project 

## project file setup- 1
 1) uses git init to initilize package.json
 2) created public folder and inside it:-
    - temp folder
        - .gitkeep
 3) Created src folder inside it:-
    - app.js
    - constants.js
    - index.js
 4) added **npm i -D nodemon** and modified package.json    
 5) At package.json added type: **module and dev: "nodemon src/index.js"**

## project file setup- 2
 1) Inside scr modification and added folders :-  
    a) controllers  
    b) db  
    c) models  
    d) utils  
    e) middlewares  

## connecting mongoDB with backend
 1) Create a mDB account and go through the configration and allow IP as 0.0.0.0/0 (allow access from anywhere which is probhited. But for learning purpose use it.)
2) Now click on connect button and go on connect with vsCode and copy the url and paste it in .env file . 
3) Replace <password> with the users password created by you . and remove the last backslash
4) Go to constant.js present in src and export the name of DB in it . this is just to make all the constant at one place to remove ambigity.

### How to write code for DB Connection

 1) Directly writing the connection code in index.js file.
 2) Writing the connection code in other .js file and importing it to index.js.
 3) Mongoose will help in db connection mongoose.connect()
 4) Always use try and catch block and use async and await.
 5) In **mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);**

## dotenv file study
1) Two syntax is available
   - require(dotenv).config({path: "path of .env file"})
   - import * as dotenv from "dotenv"
      dotenv.config({path:""})
2) Configure the .env file as early as possible. in index.js of the src folder.
3) process.env.key_name will be use to refer to the key store in .env file.
4) Whenever you have change in the environment variable you have to restart the nodemon.

## express study 
1) express is use to create the app. A framework for node.js 
2) it has method like get, post , delete work as an endpoint to the routing. Link to read more:- https://expressjs.com/en/guide/routing.html
3) Routing refers to how an application’s endpoints (URIs) respond to client requests.
4) You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function
```javascript
5) app.METHOD(PATH, HANDLER)  //GENERAL FORM 
```
6) PATH :- './api/something' and HANDLER is a callback function. See Lecture2 folder of your notes to understand how to create api .
7) Read the docs (Very Important).

## cors and cookie-parser
1) cors stands for cross-origin resource sharing 
2)  It's a security feature implemented in web browsers that controls and manages cross-origin HTTP requests.
3) What is cross-origin? Ans:- When a web application makes a request for resources (like APIs or assets) from a different domain, protocol, or port than the one it originated from, it's considered a cross-origin request.
4) npm i cors; import cors from "cors"; app.use(cors());

5) import cookieParser from "cookie_parser"; app.use(cookieParser())
6) cookie_parser is used to perform CRUD operation on the client side cookies by the server.

## Setting conifguration of the backend 
Server can accept data from various paths such as through form , url , json etc.
1) app.use(express.json({ limit: "size in kb"})) to accept data in json format 
2) app.use(express.urlencoded({extended: true, limit : "16kb" })) to parse the and fetch credintials from the url.
3) app.use(express.static("public/folder_name")) to fetch images, fevicon etc from the public folder.

## middleware

checking of the request before it hit to the endpoint/api like app.METHOD("path",(req,res)=>{body to send the query}).

checking is like if the user is lockedin to access the content at that endpoint.

there is not only (req,res) it is (err,req,res,next); 

multiple middleware is allowed in between before serving for the request.

## higher order function in javaScript
As we have to interact with db frequently so writing code which is present in ../db/index.js is hactic . To ovedrcome we will make utility function in utils folder in asyncHandler.js where we define a higher order function.

What are high order function?
Higher order function are those whcich can accept other function as a parameter.

Syntax:-
```javascript
   const fun_name = (func) =>{ () => {}}
   we just remove this outer curly braces
   const asyn_fun_name = (func) => async (req,res,next) =>{}
   ```

in that file we have studied two method 
1) Promise methid
2) try catch resolve using higher order function

## define 3 functions in utils folders

1) apiErrors :- standardizing the response send when there is error somewhere what to return in response code, message, stack . Express has Error class inbuild here we have just extended that class to define our own custom error response to an api. This is done just to mentain the uniformity of the code.

2) apiResponse:- What to send on success of the request and how(i.e. structure of the response code) is defined here.

3) higher order function just to use when there is asyncronos function is envoked we will use that snippet just pass the function to make it async.

"**As the folder name suggested utils (i.e utilities) here we define those thing that we will use on frequent basis so that there will be no repetiton of code and uniformity of the code is mentained**".


### Api Response Code
100 - 199 Information Response.  
200 - 299 Success Response.  
300 - 399 Redirection message.  
400 - 499 Client Error.  
500 - 599 Server Error.

### Some Special Response code 

102 :- Server has recieved the request and in processing the request but the response is not available.  
200 :- Ok Success for the HTTPs Request  
201 :- The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.  
202 :- Request is recieved but not acted upon.  
400 :- Bad Request. The server cannot or will not process the request due to something that is perceived to be a client error  
401 :- Unauthorized. Client must authenticate itself to recieve the request.  
404 :- Page Not found.  


## Defining Models 

1) Here we will define the schema of the different models.  
2) Studied before that to do anything related to DB we need mongoose to make it easy task.
3) Tod define any schema we have basic 3 step code snippet:- 
```javascript
import mongoose from "mongoose"

const variable = new mongoose.Schema({
   // Required fields like
   username:{
      type:String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
   }
   ....
   ....
   .... so on
},{timestamps:true,})  

export const variable = new mongoose.model("model_name",variable);

```
4) Here are some key points to be mentioned   
- Suppose we want some prop/field to be connected to some other model we will use to def. type as given below example
```javascript
propname:{
   type: mongoose.Schema.Types.ObjectId,
   ref:"model_name"
}
```
- Suppose we want some predefine error message to show then we can done it through mongoose also
```javascript
propname:{
   type: String,
   required:[true,"Default Error message"]
}
```
- model_name will be saved in DB as model_names this is predef in mongoDB.


## packages for plugins and models act as middleware

1) mongoose-aggregate-paginate-v2:- A cursor based custom aggregate pagination library for Mongoose with customizable labels.  
- Pagination :- Pagination breaks large sets of content into smaller, manageable pages for users. It's vital for navigating extensive data like product lists or movies. In SQL, LIMIT and OFFSET control the number of records shown per page and where to start. In NoSQL, methods like limit() and skip() manage the data displayed. However, large offsets can impact performance, so optimizing pagination methods is crucial for smoother browsing.

## Saving password in DB

**ALL THE MODIFICATION ARE MADE IN user.model.js**
### Study of bcrypt library
1) Password are not saved directly in the db. Whenever there is a leakage in the DB password should be protected.

2) For doing this we have a third party hash function bcrypt and bcrypt.js both do the same thing the main difference is bcrypt is based on nodejs and .js dosnt envolve any other libray. the function of both is to hash the password.

3) The hashing of password will be done jsut before saving the new user to the DB, so we have to use a middleware **Pre** to do it.

```javascript
schemaName.pre('save', function(next) {
  // do stuff
  next();
});
```
here save is the event that is going to have just after the function execution.
here function(next) is an higher order fucntion which has parameter next a function.

4) How to hash password 
- To do so follow the code snippet:-
```javascript
userSchema.pre('save',async function(next){
   if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password,10);
    next();
});
```

5) bcrypt.hash(var_to_be_hashed, no of rounds/salt) this perticular method will hashed the password. this func will be executed everytime even if any this modified so to overcome to this we use this.isModified("sting_var") return true if modified 

6) We have to check also if the password is correct or not. Mongoose provides us to create our own custom functions/methods by using the syntax  
```javascript
- schemaName.methods.methodNamae = async function(password){
   // do what you want.
   return await bcrypt.compare(password,this.password);  
}
```

### Study of JWT 

1) JWT stands for json web tokens. It is a bearer token. It is just like a key if some person has that key we will going to send the data to him/her.

**JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA**

2) Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

3) We are using 2 Token i.e
- AccessToken (expiry is 1d)
- RefereshToken (expiry is 10d) d:- days  
both are same i.e jwt (value is not same)

4) modify the .env file with  
ACCESS_TOKEN_SECRET = your secret key  
ACCESS_TOKEN_EXPIRY = 1d  
REFERENCE_TOKEN_SECRET = new secret   
REFERENCE_TOKEN_EXPIRY = 10d  

5) jwt has method **sign** we are going to use it to generate the token. 

- **jwt.sign({payload},access_token_secret,{expiresIn: access_token_expiry})** return this 


## Special Notes:- 
1) async code always return a promise so when we call any async function we should use this structure of code --
```javascript
 asyncfunc().then(()=>{
   // work to done 
 }).catch((err)=>{
   console.log(err);
 })
 ```

2) the id given by the mondoDB is in bson not in json. **Please study the difference b/w them**

3)