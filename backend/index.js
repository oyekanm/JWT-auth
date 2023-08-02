import express from "express";
import path from 'path';
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


if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  // console.log(path.join(__dirname, 'frontend/dist'));
  
  app.get('*', (req, res) =>
  // console.log(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log(`Server started on port ${port}`);
  // console.log(process.env.MONGOURI);
});
