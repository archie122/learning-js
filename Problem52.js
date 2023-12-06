word = "Race Car"
word2 = word.split("").reverse().join("")

if (word == word2) {
  console.log("Palindrome")
} else {
  console.log("Not a Palindrome")
}
