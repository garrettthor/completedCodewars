/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/


function descendingOrder(n){
  let str = n.toString()
  let splitArr = str.split('')
  let ordArr = splitArr.sort((a,b) => b-a)
  let rejoined = Number(ordArr.join(''))
  return rejoined
}



//WIP version below
/*
function descendingOrder(n){
  let str = n.toString()
  let splitArr = str.split('')
  console.log(splitArr)
  let ordArr = splitArr.sort((a,b) => b-a)
  console.log(ordArr)
  let rejoined = Number(ordArr.join(''))
  console.log(rejoined)
}

descendingOrder(19283734645)
*/