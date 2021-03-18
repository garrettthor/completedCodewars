/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA" 
*/



//Working version below

/*
function DNAStrand(dna){
  console.log(dna)
  const searchA = 'A'
  const flipA = 'Z'
  const searchT = 'T'
  const replaceTwA = 'A'
  const replaceZwT = 'T'
  const firstStep = dna.split(searchA).join(flipA).split(searchT).join(replaceTwA).split(flipA).join(replaceZwT)
  console.log(firstStep)
  const searchC = 'C'
  const flipC = 'X'
  const searchG = 'G'
  const replaceGwC = 'C'
  const replaceXwG = 'G'
  const secondStep = firstStep.split(searchC).join(flipC).split(searchG).join(replaceGwC).split(flipC).join(replaceXwG)
  console.log(secondStep)
}

DNAStrand("ATGC")
*/

//Version turned in:

function DNAStrand(dna){
  const searchA = 'A'
  const flipA = 'Z'
  const searchT = 'T'
  const replaceTwA = 'A'
  const replaceZwT = 'T'
  const firstStep = dna.split(searchA).join(flipA).split(searchT).join(replaceTwA).split(flipA).join(replaceZwT)
  const searchC = 'C'
  const flipC = 'X'
  const searchG = 'G'
  const replaceGwC = 'C'
  const replaceXwG = 'G'
  const secondStep = firstStep.split(searchC).join(flipC).split(searchG).join(replaceGwC).split(flipC).join(replaceXwG)
  return secondStep
}