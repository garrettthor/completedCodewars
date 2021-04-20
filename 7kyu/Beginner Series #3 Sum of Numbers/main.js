/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function getSum( a,b ){
    let loNum
    let hiNum
    if (a < b){
        loNum = a
        hiNum = b
    } else if (a > b) {
        loNum = b
        hiNum = a
    } else if (a === b) {
        return a
    }
    console.log(loNum, hiNum)
    let arrayOfNums = []
    for ( i = loNum; i <= hiNum; i++) {
        arrayOfNums.push(i)
    }
    console.log(arrayOfNums)
    let answer = arrayOfNums.reduce((acc, c) => acc + c, 0)
    console.log(answer)
    return answer
}
getSum( 5, 1 )