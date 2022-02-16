const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
//setup a logger
//load the env
dotenv.config({
  path: `${path.join('./', 'config', 'config.env')}`,
});
require('./config/db.js').dbConnection();

//initializing the server
const app = express();

app.use(require('./middleware/logger.js').appLoggerMiddleware);

//routes to handle the bootcamp
app.use(require('./router/bootcamps.js')); // this will handler the bootcamps

//selecting the server port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `server is on and listening on port ${port}`.underline.yellow.bold
  );
});
