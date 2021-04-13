/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/

function validParentheses(parens){
    let parenArr = [];
    let parenObj = {'(': ')'}
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') {
            console.log(parens[i])
            parenArr.push(parens[i]);
        }
        else {
            let last = parenArr.pop(); 
            if (parens[i] !== parenObj[last]) {
              return false
            }
        }
    }
    if (parenArr.length !== 0) {
      return false
    }
    return true;
}

//validParentheses("()")
validParentheses('(()()()(')




/*
function validParentheses(parens){
    console.log(parens)
    let leftCount = 0
    let rightCount = 0
    let splitArr = parens.split('')
    console.log(splitArr)
    if (splitArr[0] === ')'){
        console.log('Opening parenth is wrong')
        return false
    } else if (splitArr[0] === '(') {
        splitArr.forEach(el => {
            if (el === '(') {
                leftCount += 1
            } else if (el === ')') {
                rightCount += 1
            }
        })
        console.log(`Left count is ${leftCount}`)
        console.log(`Right count is ${rightCount}`)
        if (leftCount === rightCount) {
            console.log('Equal parts L & R')
            return true
        } else {
            return false
        }
    }
}
*/