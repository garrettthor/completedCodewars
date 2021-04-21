/*
Create a function called shortcut to remove all the lowercase vowels in a given string.
Examples

shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby

Don't worry about uppercase vowels.
*/



function shortcut(string){
    let splitArr = string.split('')
    console.log(splitArr)
    for (i=0; i<splitArr.length; i++) {
        if (splitArr[i] === 'a' || splitArr[i] === 'e' || splitArr[i] === 'i' || splitArr[i] === 'o' || splitArr[i] === 'u') {
            splitArr.splice(i, 1,)
        }
    }

    //it left double letters...so running the for loop twice did the trick.
    for (i=0; i<splitArr.length; i++) {
        if (splitArr[i] === 'a' || splitArr[i] === 'e' || splitArr[i] === 'i' || splitArr[i] === 'o' || splitArr[i] === 'u') {
            splitArr.splice(i, 1,)
        }
    }
    console.log(splitArr)
    return splitArr.join('')
}

shortcut('ninnypooop')