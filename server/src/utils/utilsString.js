export function parsingStrToJSON(str) {
  const output = [];
  let arrayLogStr = str.split('\n');
  arrayLogStr = arrayLogStr.filter(function (e) {return e !== ''||null||undefined;});
  for(const i in arrayLogStr) {
    const logStr = JSON.parse(arrayLogStr[i]);
    output.push(JSON.stringify(logStr, ['message', 'code', 'time'], 2));
  }
  return '[' + output + ']';
}
