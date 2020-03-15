const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');

// Route File
const bootcamps = require('./routes/bootcamps');

//load env var
dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 6000;

//dev logging env

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}
// Mount router
app.use('/api/v1/bootcamps',bootcamps);

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  )
);
