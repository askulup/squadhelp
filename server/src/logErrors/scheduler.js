const schedule = require('node-schedule');
const backupLogs = require('./backupLogs');

export function start(){
  schedule.scheduleJob('00 30 11 * * *', () => {
    backupLogs.backup();
  });
}
