const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//Middleware

app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_STRING);
    app.listen(PORT, console.log(`server listening on ${PORT}...`));
  } catch (error) {
    console.error(error);
  }
};

start();
