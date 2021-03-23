/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

//Some stupid stuff happened here.  The biggest 'F U' of the kata is that on the two tests with punctuation, they put a space before it.  Like WTF mate?  So 'pig latin is cool !'  would result in an extra 'ay' inbetween oolcay and the isolated and pushed punctuation.  Annoying.  So there's a whole extra step here to detect and remove and errant 'ay'.


function pigIt(str){
    //console.log(str)
    let splitArr = str.split(' ')
    let answerArr = []
    //console.log(`Split Arr is: ${splitArr}`)
    splitArr.forEach(element =>{
        let splitWord = element.split('')
        if (splitWord !== '!' || splitWord !== '?'){
            //console.log(splitWord)
            splitWord.push(element[0])
            splitWord.push('ay')
            splitWord.shift()
            answerArr.push(splitWord.join(''))
        }
        
    })
    let almostAnswer = answerArr.join(' ')
    //console.log(`Almost answer (possibly w punctuation) is: ${almostAnswer}`)

    let fixingAlmostArr = almostAnswer.split('')

    //console.log(fixingAlmostArr)

    if (fixingAlmostArr.includes('!') || fixingAlmostArr.includes('?')){
        //console.log('Punctuation detected!')
        for( let i = 0; i < fixingAlmostArr.length; i++){ 
            if ( fixingAlmostArr[i] === '!') { 
                fixingAlmostArr.splice(i, 1);
                fixingAlmostArr.push(' !') 
            }
            if ( fixingAlmostArr[i] === '?') { 
                fixingAlmostArr.splice(i, 1);
                fixingAlmostArr.push(' ?')
            }
        }
    }


    console.log(fixingAlmostArr.join(''))

    let lastStep = fixingAlmostArr.join('')
    let lastStep2 = lastStep.split(' ')
    console.log(lastStep2)

    if (lastStep2.includes('ay')){
        console.log('EXTRA AY FOUND')
        for (let i = 0; i < lastStep2.length ; i++){
            if (lastStep2[i] === 'ay'){
                lastStep2.splice(i,1)
            }
        }
        console.log(lastStep2)
    }
    console.log(lastStep2.join(' '))
    return lastStep2.join(' ')
    
}


pigIt('Pig latin is cool !')
//pigIt('O tempora o mores !')