# References and Links to learn about the project 

# project file setup- 1
 1) uses git init to initilize package.json
 2) created public folder and inside it:-
    a) temp folder
        a') .gitkeep
 3) Created src folder inside it:-
    a) app.js , constants.js , index.js
 4) added npm i -D nodemon and modified package.json    
 5) At package.json added type: module and dev: "nodemon src/index.js"


# project file setup- 2
 1) Inside scr modification and added folders :-
    a) controllers 
    b) db
    c) models
    d) utils
    e) middlewares


# connecting mongoDB with backend
 1) Create a mDB account and go through the configration and allow IP as 0.0.0.0/0 (allow access from anywhere which is probhited. But for learning purpose use it.)
2) Now click on connect button and go on connect with vsCode and copy the url and paste it in .env file . 
3) Replace <password> with the users password created by you . and remove the last backslash
4) Go to constant.js present in src and export the name of DB in it . this is just to make all the constant at one place to remove ambigity.


<How to write code for DB Connection

 1) Directly writing the connection code in index.js file.
 2) Writing the connection code in other .js file and importing it to index.js.
 3) Mongoose will help in db connection mongoose.connect()
 4) Always use try and catch block and use async and await.
 5) In mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);

# dotenv file study
1) Two syntax is available
   a) require(dotenv).config({path: "path of .env file"})
   b) import * as dotenv from "dotenv"
      dotenv.config({path:""})
2) Configure the .env file as early as possible. in index.js of the src folder.
3) process.env.key_name will be use to refer to the key store in .env file.
4) Whenever you have change in the environment variable you have to restart the nodemon.

# express study 
1) express is use to create the app. A framework for node.js 
2) it has method like get, post , delete work as an endpoint to the routing. Link to read more:- https://expressjs.com/en/guide/routing.html
3) Routing refers to how an application’s endpoints (URIs) respond to client requests.
4) You can also use app.all() to handle all HTTP methods and app.use() to specify middleware as the callback function
5) app.METHOD(PATH, HANDLER) GENERAL FORM 
6) PATH :- './api/something' and HANDLER is a callback function. See Lecture2 folder of your notes to understand how to create api .
7) Read the docs (Very Important).

# cors and cookie-parser
1) cors stands for cross-origin resource sharing 
2)  It's a security feature implemented in web browsers that controls and manages cross-origin HTTP requests.
3) What is cross-origin? Ans:- When a web application makes a request for resources (like APIs or assets) from a different domain, protocol, or port than the one it originated from, it's considered a cross-origin request.
4) npm i cors; import cors from "cors"; app.use(cors());

5) import cookieParser from "cookie_parser"; app.use(cookieParser())
6) cookie_parser is used to perform CRUD operation on the client side cookies by the server.

# Setting conifguration of the backend 
Server can accept data from various paths such as through form , url , json etc.
1) app.use(express.json({ limit: "size in kb"})) to accept data in json format 
2) app.use(express.urlencoded({extended: true, limit : "16kb" })) to parse the and fetch credintials from the url.
3) app.use(express.static("public/folder_name")) to fetch images, fevicon etc from the public folder.

# middleware

checking of the request before it hit to the endpoint/api like app.METHOD("path",(req,res)=>{body to send the query}).

there is not only (req,res) it is (err,req,res,next); 

multiple middleware is allowed.

# higher order function in javaScript
As we have to interact with db frequently so writing code which is present in ../db/index.js is hactic . To ovedrcome we will make utility function in utils folder in asyncHandler.js where we define a higher order function.

What are high order function?
Higher order function are those whcich can accept other function as a parameter.

Syntax:-
   const fun_name = (func) => () => {}
   const asyn_fun_name = (func) => async (req,res,next) =>{}

in that file we have studied two method 
1) Promise methid
2) try catch resolve using higher order function


# Api Response Code
100 - 199 Information Response.
200 - 299 Success Response.
300 - 399 Redirection message.
400 - 499 Client Error.
500 - 599 Server Error.

Some Special Response code 

102 :- Server has recieved the request and in processing the request but the response is not available.

200 :- Ok Success for the HTTPs Request 

201 :- The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests.

202 :- Request is recieved but not acted upon.

400 :- Bad Request. The server cannot or will not process the request due to something that is perceived to be a client error

401 :- Unauthorized. Client must authenticate itself to recieve the request.

404 :- Page Not found.








