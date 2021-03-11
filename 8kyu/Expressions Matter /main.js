/*

    Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
    In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

*/


function expressionMatter(a, b, c) {
  let test1 = a + b + c
  let test2 = a + b * c
  let test3 = a * b + c
  let test4 = a * b * c
  let test5 = a * (b + c)
  let test6 = (a+ b) * c

  let arr = [test1, test2, test3, test4, test5, test6]
  let sortedArr = arr.sort((a,b) => a-b)
  let max = sortedArr[sortedArr.length-1]
  return max
}

expressionMatter(1,2,3)