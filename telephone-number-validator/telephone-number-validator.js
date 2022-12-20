// I used the regex application to build a regular expression that cover all cases

function telephoneCheck(str) {
    let regularExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    
  //testting if the input string is matching the regular expression
    return regularExp.test(str);
  }
  
  telephoneCheck("555-555-5555");