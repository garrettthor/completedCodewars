/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/


function digital_root(n) {
  
  let splitArr = n.toString().split('')
  console.log(splitArr)

  let numSplitArr = splitArr.map(element => Number(element))
  console.log(numSplitArr)

  let sum

  sum = (numSplitArr.reduce((acc, c) => acc + c))
  console.log(sum)
  if (sum < 10) {
    console.log(`Answer is ${sum}`)
    return sum
  } else {
    splitSumArr = sum.toString().split('')
    let numSplitArr2 = splitSumArr.map(element => Number(element))
    console.log(numSplitArr2)
    let sum2 = numSplitArr2.reduce((acc, c) => acc + c)
    console.log(`Answer is ${sum2} as long is it ain't 2 digits...`)
    if (sum2 < 10){
      return sum2
    } else {
      splitSumArr2 = sum2.toString().split('')
    let numSplitArr3 = splitSumArr2.map(element => Number(element))
    console.log(numSplitArr3)
    let sum3 = numSplitArr3.reduce((acc, c) => acc + c)
    console.log(sum3)
    return sum3
    }
  }
}


//Here's the top solution....wtf
/*
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
*/
digital_root(695883)


//Final code below
/*
function digital_root(n) {
  let splitArr = n.toString().split('')
  let numSplitArr = splitArr.map(element => Number(element))
  console.log(numSplitArr)
  let sum = (numSplitArr.reduce((acc, c) => acc + c))
  if (sum < 10) {
    return sum
  } else {
    splitSumArr = sum.toString().split('')
    let numSplitArr2 = splitSumArr.map(element => Number(element))
    let sum2 = numSplitArr2.reduce((acc, c) => acc + c)
    if (sum2 < 10){
      return sum2
    } else {
      splitSumArr2 = sum2.toString().split('')
    let numSplitArr3 = splitSumArr2.map(element => Number(element))
    let sum3 = numSplitArr3.reduce((acc, c) => acc + c)
    return sum3
    }
  }
}
*/