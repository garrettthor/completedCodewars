/*
Unfinished Loop - Bug Fixing #1

Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/


function createArray(number){
  var newArray = [];
  //Dumb dumb timmy was missing the 'counter ++'.  Don't be timmy
  for(var counter = 1; counter <= number; counter ++){
    newArray.push(counter);
  }
  
  return newArray;
}