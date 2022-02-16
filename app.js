const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

//load the env
dotenv.config({
  path: `${path.join('./', 'config', 'config.env')}`,
});

//initializing the server
const app = express();

//routes to handle the bootcamp
app.use(require('./router/bootcamps.js')); // this will handler the bootcamps

//selecting the server port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is on and listening on port ${port}`);
});
