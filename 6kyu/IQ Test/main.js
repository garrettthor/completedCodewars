/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
Examples:

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

function iqTest(numbers){
    let numArr = numbers.split(' ')
    console.log(numArr)

    //Find out if there are more evens than odds in the array
    let oddCount = 0
    let evenCount = 0
    numArr.forEach(el => {
        if (el % 2 === 0) {
            evenCount += 1
        } else {
            oddCount += 1
        }
    })
    console.log(`Odd numbers: ${oddCount}`)
    console.log(`Even numbers: ${evenCount}`)

    let answerPosition

    if (evenCount > oddCount) {
        //find the odd number
        for (i=0; i<numArr.length; i++) {
            if (numArr[i] % 2 !== 0) {
                answerPosition = i+1
                console.log(answerPosition)
            }
        }
    } else {
        //find the even number
        for (i=0; i<numArr.length; i++) {
            if (numArr[i] % 2 === 0) {
                answerPosition = i+1
                console.log(answerPosition)
            }
        }
    }
    return answerPosition
}

iqTest("2 4 7 8 10")
iqTest("1 2 1 1")