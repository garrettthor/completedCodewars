/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
    const strLength = str.length
    const endLength = ending.length
    console.log(strLength,endLength)
    let strArray = str.split('').reverse()
    let endingArray = ending.split('').reverse()
    console.log(strArray)
    console.log(endingArray)
    let matchCount = 0
    for (i=0; i<endLength; i++) {
        if (endingArray[i] === strArray[i]) {
            console.log('match')
            matchCount += 1
            console.log(matchCount)
        }
    }
    if (matchCount === endLength) {
        console.log('good')
        return true 
    } else {
        return false
    }
}

solution('abc', 'bc')