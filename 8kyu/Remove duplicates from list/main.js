/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/


function distinct(a) {
    return a.filter((e, i, a) => a.indexOf(e) == i)
}

// can add .sort(function(a,b){return a - b}) to sort the list afterwords... but theeeeyyy diddn'tt waaaannnnt a proper answer did they now.  smh





//The below CVd from https://stackoverflow.com/questions/55255260/remove-all-of-the-duplicate-numbers-in-an-array-of-numbers

/*
let arr = [1, 2, 4, 2, 3, 3, 4, 5, 5, 5, 8, 8, 9, 10];
let finalResult = arr.filter((e, i, a) => a.indexOf(e) == i).sort(function(a, b){return a - b});
console.log(finalResult);
*/