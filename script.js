function firstNonRepeatedChar(str) {
 // Write your code here
	 const charCount = {};

  // Iterate through the string to count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
