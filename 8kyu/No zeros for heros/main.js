/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/

/*
function noBoringZeros(n) {
    let splitArr = n.toString().split('')
    console.log(splitArr)
    if (splitArr[splitArr.length-1] === '0'){
        splitArr.pop()
        console.log(splitArr)
        let answer = Number(splitArr.join(''))
        console.log(answer)
    }
}
*/


function noBoringZeros(n) {
    let splitArr = n.toString().split('')
    console.log(splitArr)
    if (splitArr[splitArr.length-1] !== '0'){
        return n
    } else {
        if (splitArr[0] === '-'){
            splitArr.shift()
            console.log(splitArr)
        }
    let answer
    while (splitArr[splitArr.length-1] === '0'){
        splitArr.pop()
        console.log(splitArr)
        if (splitArr[splitArr.length-1] !== '0'){
            console.log(splitArr)
            answer = Number(splitArr.join(''))
            if (n < 0){
                answer = answer * -1
                console.log(answer)
            }
        }
    }
    return answer
    }
    
}

//noBoringZeros(1450)
//noBoringZeros(960000)
noBoringZeros(-7349)