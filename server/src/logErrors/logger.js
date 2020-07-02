const fs = require('fs');
const timestamp = require('./timestamp');
const CONSTANTS = require('../constants');

module.exports = (error) => {
  const dataError = {
    message : error.message,
    time: timestamp(),
    code : error.code,
    stackTrace : error.stack,
  };

  fs.appendFile(CONSTANTS.LOG_PATH, JSON.stringify(dataError)+'\n', (err) => {
    if (err) throw err;
  });
};
