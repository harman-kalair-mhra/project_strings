const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function WordCount(str) {
  return str.split(" ").length;
}

rl.question("Type in words for word count: ", (answer) => {
  console.log("Your word count is " + WordCount(answer))
})

// console.log(WordCount("hello world"));