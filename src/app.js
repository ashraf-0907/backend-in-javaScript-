import express from "express";
import cors from "cros";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}))
app.use(express.urlencoded({extended: true,limit: "16kb" })); // parse the body.req for the data within specififed limit 
app.use(express.static("public")) // Serves static files in the public directory
app.use(cookieParser());

export default app;