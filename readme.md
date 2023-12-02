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


