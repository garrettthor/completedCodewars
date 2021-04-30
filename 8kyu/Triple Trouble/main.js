/*
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/


function tripleTrouble(one, two, three){
    let oneSplitArr = one.split('')
    console.log(oneSplitArr)
    let twoSplitArr = two.split('')
    let threeSplitArr = three.split('')

    let answerArr = []

    for (i=0;i<oneSplitArr.length;i++) {
        answerArr.push(oneSplitArr[i])
        answerArr.push(twoSplitArr[i])
        answerArr.push(threeSplitArr[i])
    }

    console.log(answerArr)

    return answerArr.join('')
}

tripleTrouble('aa','bb','cc')