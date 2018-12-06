/* 
configuration for winston logger, 
writes to server/logs  
prints to the console 
*/

const winston = require('winston');

module.exports.logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write `info` and below logs to the console
    //
    new winston.transports.Console({ level: 'error' }),
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({
      filename: './server/logs/error.log',
      level: 'info',
    }),
    new winston.transports.File({ filename: './server/logs/combined.log' }),
  ],
});
