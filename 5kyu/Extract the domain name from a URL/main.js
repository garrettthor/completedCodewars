/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/
function domainName(url){
    // If the URL includes forward slashes, we can separate things that way real easy
    if (url.includes('/')){
        // Split and remove the forward slashes
        let splitArr = url.split('/')
        console.log(splitArr)
        //This is just for the edge cases where the URL starts right away like 'wvosgn5hf2pqdy73j2-z2kc6m.jp/users'.  It cleared the edge cases in the exercise.
        if (splitArr[0].includes('.')) {
            return (splitArr[0].split('.')[0])
        }
        //Isolate the element that comes after 'http:' and ''  <- (empty element for double forward slashes)
        let target = splitArr[2]
        console.log(target)
        //Split off the dot to isolate the site name
        let targetArr = target.split('.')
        console.log(targetArr)
        let answer
        //If the URL contained a WWW, skip that [0] element and the site name is probably the [1] element
        if (targetArr[0] === 'www'){
            console.log('bingo')
            answer = targetArr[1]
        //But if there was no WWW in the first place, then the site name is probably the [0] element
        } else if (targetArr[0] !== 'www') {
            answer = targetArr[0]
        }
        //Return the answer
        console.log(answer)
        return answer
        //BUUUUT maybe there wasn't an http:// or https:// before the site name.
    } else {
        //Just split at the dot
        let targetArr = url.split('.')
        console.log(targetArr)
        let answer
        //If there was a WWW, take the next element over ([1]) as the answer
        if (targetArr[0] === 'www'){
            console.log('bingo')
            answer = targetArr[1]
        //If there WASN'T a WWW, then just take the [0] element as the answer
        } else if (targetArr[0] !== 'www') {
            answer = targetArr[0]
        }
        console.log(answer)
        return answer
    }
}
domainName("http://github.com/carbonfive/raygun")
// domainName("http://www.zombie-bites.com")
// domainName("https://www.cnet.com")
// domainName('www.xakep.ru')

// domainName('wvosgn5hf2pqdy73j2-z2kc6m.jp/users')