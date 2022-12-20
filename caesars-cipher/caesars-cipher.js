function rot13(str) {

    // All the caracters of the alphabet
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let decodedString = "";
    
    for (let i = 0 ; i < str.length; i++) {
      let index = letters.indexOf(str[i]);
      //the index of a space caracter is -1 so we do not want to change naything in this case
      if (index == -1) {
        decodedString += str[i];
      }
      //If the caracter is a letter we want to ROT13
      //We want to devide by 26 so we are not going out of range 
    
      else{
        let newIndex = (index + 13) % 26;
        decodedString += letters[newIndex];
      }
      letters.indexOf(str[i]);
    }
    
      return decodedString;
    }
    
    rot13("SERR PBQR PNZC");