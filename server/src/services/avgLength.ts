export default function Average (str: string): string {
    var wordCount = str.split(" ").length;
    var wordArray = str.split(" ");
    var string = 0;
    for (var i = 0; i < wordCount; i++){
      string += wordArray[i].length;
    }
    var avgLen = string / wordCount;
    return avgLen.toFixed(2)
  };