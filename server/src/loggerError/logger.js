

module.exports = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!');



  /*var err = new Error();
  return err.stack;
  console.error(err.stack);
  res.status(500).send('Something broke!');*/
};

//import fs from 'fs';
/*

module.exports = (err, req, res, next) => {
  const data = res.status(err.code);
  fs.writeFile('./log.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};
*/

