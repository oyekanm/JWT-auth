import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import userRouter from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import mongooseConnect from "./config/db.js";

dotenv.config();
const port = process.env.PORT || "5000";

mongooseConnect();


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Server started on port ${port}`);
  // console.log(process.env.MONGOURI);
});
