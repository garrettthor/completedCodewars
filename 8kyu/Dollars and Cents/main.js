/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10

Good luck! Your team knows they can count on you!
*/

function formatMoney(amount){
    let dollars = Math.floor(amount)
    //console.log(dollars)
    let splitArr = amount.toString().split('.')
    //console.log(splitArr)
    if (splitArr.length === 1){
        splitArr.push('00')
    }
    let cents = [splitArr[1]]
    //console.log(cents)
    if (splitArr[1].length === 1){
        cents.push('0')
        //console.log(cents)
        cents = cents.join('')
        //console.log(`${amount} turns into:  $${dollars}.${cents[0]}${cents[1]}`)
        return `$${dollars}.${cents[0]}${cents[1]}`
    } else if (splitArr[1].length > 2){
        //console.log('too many cents')
        let tooMany = splitArr[1].split('')
        //console.log(tooMany)
        //console.log(`${amount} turns into:  $${dollars}.${tooMany[0]}${tooMany[1]}`)
        return `$${dollars}.${tooMany[0]}${tooMany[1]}`
    } else {
        //console.log(`${amount} turns into:  $${dollars}.${cents}`)
        return `$${dollars}.${cents}`
    }
}

formatMoney(39.99)
//formatMoney(5)
//formatMoney(.9)
