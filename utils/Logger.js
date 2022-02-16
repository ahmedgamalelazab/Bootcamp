/**
 * * desc :   this library is made by eng : ahmed gamal mohamd
 * * purpose: logging the requests happening on the server level
 * * functionality : by using this instance you can log any event any where of your application
 * * it should provide a way of opening the file system , write to a file , close the file after finish writing
 */

const fs = require('fs');
const path = require('path');

class Logger {
  constructor() {
    this.logPath = path.join('./', 'logs', 'appLogs.txt');
    this.fd = 0;
    this.fileOpened = false;
  }

  //init allowed me to open the file and save the fd for writing and closing the stream
  init() {
    //inti should open the file stream and start to append
    try {
      this.fd = fs.openSync(this.logPath, 'a+');
      //if no error
      //file opened successfully
      this.fileOpened = true;
    } catch (err) {
      console.log(`{
            "server error : ":${err},
            "error object":"it happens on writing the log file"
          }`);
      return;
    }
  }

  writeLog(buffer) {
    console.log(this.fd);
    let logBuffer = typeof buffer === 'string' ? buffer : 'NEGATIVE_BUFFER';
    fs.write(this.fd, logBuffer, (err, bufferBytes, bufferWritten) => {
      if (err) {
        console.log(`{
                "server error : ":${err},
                "error object":"it happens on writing the log file"
              }`);
        return;
      }
      //else
      console.log(
        `written : ${bufferBytes} with bufferWritten : ${bufferWritten}`
      );
    });
  }

  close() {
    console.log(this.fd);
    fs.close(this.fd, err => {
      if (err) {
        console.log(`{
                "server error : ":${err},
                "error object":"it happens on Close the log file"
              }`);
        return;
      }
      //if no error
      this.fileOpened = false;
    });
  }

  //*@ desc     this is doing all the steps above to you
  logEvent(buffer) {
    let logBuffer = typeof buffer === 'string' ? buffer : 'NEGATIVE_BUFFER';
    this.init(); // init here is used to open the file
    this.writeLog(logBuffer);
    this.close(); //this will close the stream
  }
}

const appLogger = new Logger();

module.exports = appLogger;
