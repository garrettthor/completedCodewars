/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/


function nameShuffler(str){
    let splitArr = str.split(' ')
    return splitArr.reverse().join(' ')
}

nameShuffler('Robert Bobberson')