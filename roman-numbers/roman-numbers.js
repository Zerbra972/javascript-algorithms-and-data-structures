function convertToRoman(num) {

    // This object link the values and the roman symbols, we can build any numbers with this values
  
    const numerals = {
      1: 'I',
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40 : "XL",
      50 : "L",
      90 : "XC",
      100 : "C",
      400 : "CD",
      500 : "D", 
      900 : "CM",
      1000 : "M" 
      }
  
    let romanVersion ='';
  
    const decimalsKeys = Object.keys(numerals).reverse();
  
  
  // I look if the number is bigger than 1000, if it's true i add "M" and i remove 1000 from my number and so on
  
    decimalsKeys.forEach(key => {
      while(key <= num) {
        romanVersion += numerals[key];
        num -= key;
      }
    })
   return romanVersion;
  }
  
  convertToRoman(36);