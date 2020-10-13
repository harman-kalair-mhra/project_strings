const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function CharacterCount(str) {
  return str.length;
}

rl.question("Type in words for character count: ", (answer) => {
  console.log("Your character count is " + CharacterCount(answer))
  rl.close()
})

// console.log(CharacterCount("hello world"));
