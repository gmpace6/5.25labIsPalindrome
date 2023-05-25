// Is Palindrome

// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true

// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
// isPalindrom("Racecar")
// // returns false
// isPalindrom("racecar")
// // returns true

function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Racecar"));

function isPalindromeJ(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1; j > 0; j--) {
      if (string[i] !== string[j]) {
        return false;
      } else {
        return true;
      }
    }
  }
}
console.log(isPalindromeJ("racecar"));
console.log(isPalindromeJ("Racecar"));

function isPalindromeU(string) {
    const universalPalindrome = string.toLowerCase().split(' ').join('')
    for (let i = 0; i < universalPalindrome.length; i++) {
      if (universalPalindrome[i] !== universalPalindrome[universalPalindrome.length - 1 - i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  console.log(isPalindromeU("racecan"));
  console.log(isPalindromeU("Race car"));
  console.log(isPalindromeU("So many Dynamos"));