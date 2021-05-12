/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

function smallEnough(a, limit){
    let answer = true
    let dq = false
    let finalAnswer = true
    a.forEach(el => {
        if (el <= limit) {
            answer = true
        } else {
            dq = true
        }
    })
    if (answer === true && dq === false) {
        finalAnswer = true
    } else {
        finalAnswer = false
    }
    return finalAnswer
}


smallEnough([66, 101], 200)