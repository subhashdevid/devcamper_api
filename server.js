const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const colors = require('colors');
const connectB = require('./config/db');
const errorHandler = require('./middleware/error');

//load env var
dotenv.config({ path: "./config/config.env" });

// connect DB
connectB();

// Route File
const bootcamps = require('./routes/bootcamps');


const app = express();
const PORT = process.env.PORT || 6000;

//Body Parser
app.use(express.json());
//dev logging env

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}
// Mount router
app.use('/api/v1/bootcamps',bootcamps);
//should be after bootcamp calling
app.use(errorHandler);

const server =  app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`.yellow.bold
  )
);

// Handle Unhandled rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  //close server and exit process
  server.close( () => process.exit(1));
});
