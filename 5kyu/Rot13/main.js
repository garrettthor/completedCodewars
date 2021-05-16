/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let splitArr = message.toLowerCase().split('')
    console.log(splitArr)
    let newWordArr = []
    for (i=0;i<splitArr.length;i++) {
        let originPlace
        let newPlace
        //First, let's make sure we're only assigning a place number to LETTERS
        if (splitArr[i].toLowerCase() != splitArr[i].toUpperCase() ) {
            originPlace = alphabet.indexOf(splitArr[i])
        //Add 13 for the new position
            newPlace = originPlace + 13
        //If that pushes it past the end of the alphabet, let's wrap it back to the beginning
            if (newPlace > 25) {
                newPlace = (newPlace - 26)
            }
        //Match the new position to the alphabet array and push that character to the newWordArr(ay)
            newWordArr.push(alphabet[newPlace])
        //BUUUT if the character wasn't a LETTER, let's preserve whatever it was - be it a space, exclamation, or whatever - and just push it into the new array.
        } else {
            newWordArr.push(splitArr[i])
        }
    }    
//Match capitalization from original string
    for (i=0;i<splitArr.length;i++) {
        if (message.split('')[i].toUpperCase() === message.split('')[i]) {
            newWordArr.splice([i],1,newWordArr[i].toUpperCase())
            console.log(newWordArr)
        }
    }
//Return answer
    let answer = newWordArr.join('')
    console.log(answer)
    return answer
}

//rot13('grfg')
//rot13('Test')
rot13('Ruby is cool!')