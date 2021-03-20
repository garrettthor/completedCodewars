/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//The .isInteger was the key to getting 0 to return.  If just left filtering for Number, it wouldn't return the 0's.


function filter_list(l) {
  return l.filter(Number.isInteger)
}

//filter_list([1,2,'aasf','1','123',123])
//filter_list([1,'a','b',0,15])