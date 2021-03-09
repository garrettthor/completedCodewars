/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){
  let numToStr = x.toString()
  let splatArr = numToStr.split('')
  for (i = 0; i < splatArr.length; i++) {
    if (splatArr[i] < 5){
      splatArr[i] = 0
    } else if (splatArr[i] >= 5){
      splatArr[i] = 1
    }
  }
  return splatArr.join('')
}

fakeBin(93482372483)