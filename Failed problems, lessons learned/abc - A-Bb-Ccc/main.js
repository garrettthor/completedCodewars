/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
  let splitArr = s.split('')
  console.log(splitArr)
  let mappedArr = splitArr.map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
  console.log(mappedArr)
  let rejoinedWithHyphens = mappedArr.join('-')
  console.log(rejoinedWithHyphens)
}
accum("abcde")
//accum("RqaEzty")
//accum("cwAt")

//return( s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-'))