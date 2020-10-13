const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function Average (str) {
  var wordCount = str.split(" ").length;
  var wordArray = str.split(" ");
  var string = 0;
  for (var i = 0; i < wordCount; i++){
    string += wordArray[i].length;
  }
  var avgLen = string / wordCount;
  return avgLen
};

rl.question("Type in words for Average word Length: ", (answer) => {
  console.log("Your Average count is " + Average(answer))
  rl.close()
})

// console.log(Average("This function will analyze strings"));
