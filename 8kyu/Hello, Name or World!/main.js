/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john"   => "Hello, John!"
hello "aliCE"  => "Hello, Alice!"
hello          => "Hello, World!" # name not given
hello ""       => "Hello, World!" # name is an empty String
*/


function hello(name) {
    if (name === undefined){
        return 'Hello, World!'
    } else if (name === ''){
        return 'Hello, World!'
    } else {
        let lwrCaseName = name.toLowerCase()
        let nameArr = lwrCaseName.split('')
        let newFirstLetter = nameArr[0].toUpperCase()
        nameArr.shift()
        nameArr.unshift(newFirstLetter)
        let fixedName = nameArr.join('')
        return `Hello, ${fixedName}!`
    }
}

hello()
hello('')
hello('FuckeRooOO')
