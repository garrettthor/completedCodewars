/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/


var moveZeros = function (arr) {
    let zeroCount = 0
    arr.forEach(el => {
        if (el === 0){
            zeroCount += 1
        }
    })
    console.log(`There are ${zeroCount} zero(s) in this bish`)
    let zerosRemovedArr = arr.filter(el => el !== 0)
    console.log(zerosRemovedArr)
    for (i=0; i<zeroCount; i++){
        zerosRemovedArr.push(0)
        console.log('zero added to end...')
    }
    console.log(zerosRemovedArr)
    return zerosRemovedArr
}

moveZeros([false,1,0,1,2,0,1,3,"a"])