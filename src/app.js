import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //middleware to receive application/json on server side
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //it is for url data, extended for nested objects
app.use(express.static("public"));
app.use(cookieParser());

export { app };
