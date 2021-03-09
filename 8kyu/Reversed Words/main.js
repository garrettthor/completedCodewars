//reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"


function reverseWords(str){
  let splatArr = str.split(' ')
  let reverseArr = splatArr.reverse()
  let rejoinedArr = reverseArr.join(' ')
  return  rejoinedArr
}
