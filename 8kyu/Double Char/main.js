/*
doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "

*/

function doubleChar(str) {
  const splitArr = str.split('')
  for (i=0;i<splitArr.length;i++){
    let currentChar = splitArr[i]
    splitArr.splice(i, 1, currentChar+currentChar)
  }
  return splitArr.join('')
}

doubleChar('Flipy Tipy')

//Ok, I'm a dumb dumb.  I misread the test, and wrote a function that will REMOVE double characters.  I basically solved the problem in reverse.  I'm leaving this here because it could come in handy later.

/*
function doubleChar(str) {
  const splitArr = str.split('')
  for (i=0;i<splitArr.length;i++){
    let currentChar = splitArr[i]
    let nextChar = splitArr[i+1]
    if (currentChar === nextChar){
      splitArr.splice(i, 1)
    }
  }
  return splitArr.join('')
}
*/

/* Working test version


function doubleChar(str) {
  const splitArr = str.split('')
  console.log(splitArr)
  for (i=0;i<splitArr.length;i++){
    let currentChar = splitArr[i]
    let nextChar = splitArr[i+1]
    if (currentChar === nextChar){
      console.log(`Repeat detected at ${nextChar}`)
      splitArr.splice(i, 1)
    }
  }
  console.log(splitArr)
}

doubleChar('FFlliippyy  TTiippyy')


*/