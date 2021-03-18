/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

Courtesy of projecteuler.net

*/

/*
function solution(number){
  let divBy3 = []
  let divBy5 = []
  for (i=1;i<number;i++) {
    if (i % 3 === 0){
      divBy3.push(i)
    } else if (i % 5 === 0){
      divBy5.push(i)
    }
  }
  console.log(divBy3)
  console.log(divBy5)

  let mergedArr = divBy3.concat(divBy5)
  console.log(mergedArr)

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates for the onlyUnique function below

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  let noRepeatsArr = mergedArr.filter(onlyUnique)
  console.log(noRepeatsArr)

  let summedArr = noRepeatsArr.reduce((acc, c) => acc + c, 0)
  console.log(summedArr)
  return summedArr
}


solution(100)
*/

//Beneath is the submitted code

function solution(number){
  let divBy3 = []
  let divBy5 = []
  for (i=1;i<number;i++) {
    if (i % 3 === 0){
      divBy3.push(i)
    } else if (i % 5 === 0){
      divBy5.push(i)
    }
  }
  let mergedArr = divBy3.concat(divBy5)
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let noRepeatsArr = mergedArr.filter(onlyUnique)
  let summedArr = noRepeatsArr.reduce((acc, c) => acc + c, 0)
  return summedArr
}