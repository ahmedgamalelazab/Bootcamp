const appLogger = require('../utils/Logger.js');

//*@desc logs to the server file with route tracking
module.exports.appLoggerMiddleware = async (req, res, next) => {
  appLogger.logEvent(`date : ${new Date(
    Date.now()
  ).toLocaleDateString()} , path:${req.url} , method: ${req.method}
  `);
  next(); // move next
};
