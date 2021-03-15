/*
Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/



//This does some unnessesary work, and timed out the test resulting in a fail.
/*
function oddCount(n){
  let oddArr = []
  for (i=0;i<n;i++){
    if (i % 2 !==0){
      oddArr.push([i])
    }
  }
  console.log(oddArr.length)
}
*/


//The below code is a much more simple method.

function oddCount(n){
  return Math.floor(n/2)
}