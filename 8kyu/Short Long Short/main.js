/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).

For example:

solution("1", "22") // returns "1221"
solution("22", "1") // returns "1221"

*/

/* worked it out below
function solution(a, b){
  let splitArrA = a.split('')
  let splitArrB = b.split('')
  console.log(splitArrA)
  console.log(splitArrB)
  let long
  let short
  if (splitArrA.length > splitArrB.length){
    long = splitArrA.join('')
    short = splitArrB.join('')
  } else {
    long = splitArrB.join('')
    short = splitArrA.join('')
  }
  console.log(`Long dong is ${long}`)
  console.log(`Shorty is ${short}`)
  console.log(short+long+short)
}

solution("12351234","9")
*/

function solution(a, b){
  let splitArrA = a.split('')
  let splitArrB = b.split('')
  let long
  let short
  if (splitArrA.length > splitArrB.length){
    long = splitArrA.join('')
    short = splitArrB.join('')
  } else {
    long = splitArrB.join('')
    short = splitArrA.join('')
  }
  return (short+long+short)
}