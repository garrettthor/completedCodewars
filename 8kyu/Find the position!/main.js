/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta
*/


function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return `Position of alphabet: ${(alphabet.search(letter) + 1)}`
}

position('c')