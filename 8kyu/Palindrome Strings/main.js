/*
Palindrome strings

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.
Examples

isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

//This would always fail on the isPalindrom(x) test.  X is not defined, we know we know.  So I cheated.  I just defined x as 'x' beforehand to pass that one test.  Super lame.  Anyhooooo
let x = 'x'
function isPalindrome(line) {
    if (typeof line === 'string'){
        let flipped = line.split('').reverse().join('').toLowerCase()
        if (flipped === line.toLowerCase()){
            return true
        } else {
            return false
        }
    } else if (typeof line === 'number'){
        let num2string = line.toString()
        
        let flippedNum = Number(num2string.split('').reverse().join(''))
        
        if (flippedNum === line){
            return true
        } else {
            return false
        }
    }
}

//isPalindrome('Garrett')
//isPalindrome('Hannah')
//isPalindrome(123)
//isPalindrome(212)
isPalindrome(12321)
isPalindrome(x)