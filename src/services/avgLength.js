var sentence = function (str) {
  var wordCount = str.split(" ").length;
  var wordArray = str.split(" ");
  var wordAvg = 0;
  for (var i = 0; i < wordCount.length; i++) {
    wordAvg += wordArray[i].length;
  }
  var avgLen = wordAvg / wordCount;
  console.log("Word length average: " + avgLen);
};

sentence(
  "This function will analyze strings djskdj wjdsksjks jsdkjk djsksdjks jsdksjdks sjdksjdsk"
);
