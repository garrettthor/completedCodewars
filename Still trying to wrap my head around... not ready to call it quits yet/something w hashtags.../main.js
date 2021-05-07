/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false


*/

function generateHashtag (str) {
    if (str === '') {
        console.log('empty')
        return false
    } else if (str !== '') {
        let trimmedStr = str.trim()
        //console.log(trimmedStr)
        let splitArr = trimmedStr.split(' ')
        //console.group(splitArr)
        let cappedArr = []
        splitArr.forEach(el => {
            let eachWord = el.split('')
            let firstLetter = eachWord[0].toUpperCase()
            eachWord.splice(0,1,firstLetter)
            //console.log(eachWord.join(''))
            cappedArr.push(eachWord.join(''))
        })
        //console.group(cappedArr)
        let answerStr = '#' + cappedArr.join('')
        if (answerStr.length<141){
            console.log(answerStr)
            return answerStr
        } else {
            console.log('Hashtag is too long, yo')
        }
    }
}

generateHashtag(" Hello there thanks for trying my Kata")
generateHashtag('')