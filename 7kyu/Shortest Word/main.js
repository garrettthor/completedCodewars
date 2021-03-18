/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/


function findShort(s){
  let splitArr = s.split(' ')
  let shortestWord = splitArr.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord
  }, splitArr[0])
  return shortestWord.length
}


findShort("b bitcoin take a to over the world maybe who knows perhaps")

// Below is code found from here: https://stackoverflow.com/questions/49124172/javascript-reduce-to-find-the-shortest-word-in-a-string

/*
function findShortestWord(str) {
  var words = str.split(' ');
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  }, words[0]);
  return shortest;
}
console.log(findShortestWord("The quick brown fox jumped over the lazy dog"));
*/