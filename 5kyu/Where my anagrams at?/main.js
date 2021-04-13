/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    let splitWordArr = word.split('')
    console.log(splitWordArr)
    let orderedWordArr = splitWordArr.sort()
    console.log(orderedWordArr)
    let finalWord = orderedWordArr.join('')
    console.log(finalWord)

    let rearrangedWordsArr = []
    for (i=0; i<words.length; i++) {
        rearrangedWordsArr[i] = words[i].split('').sort().join('')
    }
    console.log(rearrangedWordsArr)
    
    let answerArr = []
    for (i=0; i<rearrangedWordsArr.length; i++) {
        if (rearrangedWordsArr[i] === finalWord){
            console.log('match')
            answerArr.push(words[i])
        }
    }

    console.log(answerArr)

    return answerArr

}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])