/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
    // If ther string is empty, return an empty string
    if (str === '') {
        return ''
    }
    //If the string includes a regular hyphen
    if (str.includes('-')) {
        //Split it up and remove the hyphens
        let splitArr = str.split('-')
        let answerArr = []
        let tinyFirst
        //Capitalize the first letter of every word
        splitArr.forEach(el => {
            let wordArr = el.split('')
            let capFirstLetter = wordArr[0].toUpperCase()
            wordArr.splice(0,1,capFirstLetter)
            answerArr.push(wordArr.join(''))
            
        })
        //But if the first letter of the original string was lowercase to begin with, do a wayyy overcomplicated process to replace JUST THAT FIRST one with its origanal lowercase self ;p
        if (splitArr.join('')[0] === splitArr.join('')[0].toLowerCase()) {
            tinyFirst = splitArr.join('')[0]
            console.log(tinyFirst)
            let answer = answerArr.join('')
            let splitAnswer = answer.split('')
            splitAnswer.shift()
            splitAnswer.unshift(tinyFirst)
            let tinyAnswer = splitAnswer.join('')
            return tinyAnswer
        //Otherwise, if the first letter was uppercase, just let the original first letter capitalized version through
        } else {
            let answer = answerArr.join('')
            return answer
        }
        //Now the same process but for the underscore character
    } else if (str.includes('_')) {
        let splitArr = str.split('_')
        let answerArr = []
        splitArr.forEach(el => {
            let wordArr = el.split('')
            let capFirstLetter = wordArr[0].toUpperCase()
            wordArr.splice(0,1,capFirstLetter)
            answerArr.push(wordArr.join(''))
        })
        if (splitArr.join('')[0] === splitArr.join('')[0].toLowerCase()) {
            tinyFirst = splitArr.join('')[0]
            let answer = answerArr.join('')
            let splitAnswer = answer.split('')
            splitAnswer.shift()
            splitAnswer.unshift(tinyFirst)
            let tinyAnswer = splitAnswer.join('')
            return tinyAnswer
        } else {
            let answer = answerArr.join('')
        return answer
        }
    }
}

toCamelCase('the-stealth-warrior')
//toCamelCase('the_stealth_warrior')