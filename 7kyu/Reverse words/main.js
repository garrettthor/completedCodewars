/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/



function reverseWords(str) {
    let splitArr = str.split(' ')
    console.log(splitArr)
    let answer = []
    for (i=0; i<splitArr.length; i++) {
        answer.push((splitArr[i].split('').reverse().join('')))
    }
    console.log(answer.join(' '))
    return answer.join(' ')
}

reverseWords("This is an example!")