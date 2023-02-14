function isPalindrome(word) {
  // Write your algorithm here
    return word == word.split('').reverse().join('');
  
}

/* 
  Add your pseudocode here
  create a Palindrome function
  have the word go through a return that splits and reverses the word
  return the word and show if it is either true or false (true meaning it is a Plaindrome and false meaning it isnt)
*/

/*
  Add written explanation of your solution here
  created a function called Palindrome
  passed word as and argument
  this function splits the string, then reverses it and finally joins the word back together
  it then returns either true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
