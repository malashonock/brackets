function check(str, bracketsConfig) {
  let statusStream = [];
  let lastStatus = {};
  let bracketPair = [];
  let openingBracket = '';
  let closingBracket = '';
  let bracketType = 0;

  for (let char of str) {
    //console.log(`Char: ${char}`);
    
    for (let i = 0; i < bracketsConfig.length; i++) {
      bracketPair = bracketsConfig[i];
      openingBracket = bracketPair[0];
      closingBracket = bracketPair[1];
      bracketType = i + 1;
      
      //console.log(`${openingBracket}${closingBracket}`);
      
      if (char == closingBracket) {
        lastStatus = statusStream[statusStream.length - 1];
        
        if (lastStatus == bracketType) {
          statusStream.pop();
          //console.log(statusStream.toString());
          break;
        } else {
          if (openingBracket != closingBracket) {
            return false;
          }
        }
      }

      if (char == openingBracket) {
        statusStream.push(bracketType);
        //console.log(statusStream.toString());
        break;
      }
    }
  }

  return (statusStream.length == 0);
}

//console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));

module.exports = check;
