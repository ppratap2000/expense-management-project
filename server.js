const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
//rest object
const app = express();

// config dot env file
dotenv.config();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1");
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
