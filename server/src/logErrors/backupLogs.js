const fs = require('fs');
const timestamp = require('./timestamp');
const CONSTANTS = require('../constants');
const utilsString = require('../utils/utilsString');
const destinationFileName = './src/logErrors/logFiles/'+timestamp()+'.json';

export function backup() {
  const isFileExist = fs.existsSync(CONSTANTS.LOG_PATH);
  if (!isFileExist) {
    //console.log('no log file - no backup!');
    return;
  }
  const fileStat = fs.statSync(CONSTANTS.LOG_PATH);
  if (fileStat.size===0) {
    //console.log('nothing to copy!');
    return;
  }
  fs.readFile(CONSTANTS.LOG_PATH, 'utf8',  (err, fileContents) => {
    try{
      const fileDataString = fileContents.toString();
      const fileDataJSON = utilsString.parsingStrToJSON(fileDataString);

      fs.writeFile(destinationFileName, fileDataJSON, (err) => {
        if (err) throw err;
        //console.log('errors.log was copied to '+ destinationFileName);
      });

      fs.truncate(CONSTANTS.LOG_PATH, 0, (err) => {
        if (err) throw err;
      });
    }
    catch (err) {
      //console.error('Backup was failed: '+  err.message);
    }
  });
}
