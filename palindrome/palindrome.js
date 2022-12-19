//Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
    const alphanumericOnly = str
        // LowerCase
        .toLowerCase()
        // Non-alphanumeric characters
        .match(/[a-z0-9]/g);
        
    // String === reverse string
    return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
}

palindrome("kayak");