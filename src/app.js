import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "1000000000kb"
}))
app.use(express.urlencoded({extended: true,limit: "1000000000kb" })); // parse the body.req for the data within specififed limit 
app.use(express.static("public")) // Serves static files in the public directory
app.use(cookieParser());


//routes import
import userRouter from "./routes/user.router.js";

//routes decleration
app.use("/api/v1/users",userRouter);

export default app;