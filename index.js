import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import dataRouter from "./routes/data.js";
import dataGenerator from "./middleware/dataGenerator.js";

const app = express();
const serverDebug = true;

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup
app.use("/getech", dataRouter);
//dataGenerator();

const MONGODB_URL =
  "mongodb+srv://mongodb_admin:mongodb_Pass22@clouddb.xtoq3lb.mongodb.net/CloudDB?retryWrites=true&w=majority";
const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`\nServer running on port ${port}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
