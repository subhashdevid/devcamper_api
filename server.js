const express = require("express");
const dotenv = require("dotenv");

// Route File
const bootcamps = require('./routes/bootcamps');
//load env var
dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 6000;

// Mount router
app.use('/api/v1/bootcamps',bootcamps);

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  )
);