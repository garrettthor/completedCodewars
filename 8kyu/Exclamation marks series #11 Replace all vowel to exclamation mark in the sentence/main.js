/*
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/


function replace(s){
    let splitArr = s.split('')
    console.log(splitArr)
    for (i=0; i<splitArr.length ; i++ ) {
        if (splitArr[i] === 'a' || splitArr[i] === 'e' || splitArr[i] === 'i' || splitArr[i] === 'o' || splitArr[i] === 'u' || splitArr[i] === 'A' || splitArr[i] === 'E' || splitArr[i] === 'I' || splitArr[i] === 'O' || splitArr[i] === 'U')
        splitArr.splice(i, 1, '!')
    }
    console.log(splitArr)
    return splitArr.join('')
}


replace('ninja turtle')