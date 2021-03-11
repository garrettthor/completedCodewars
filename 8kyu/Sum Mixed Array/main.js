/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


function sumMix(x){
  let uniformArr = x.map(element => Number(element))
  return uniformArr.reduce((acc,c) => acc +c,0)
}