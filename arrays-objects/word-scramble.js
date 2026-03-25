// Paypal Karat
// You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random note.

// Your task is to write a function that, given a list of words and a note, finds and returns the word in the list that is scrambled inside the note, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

// Example:  
// words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
// note1 = "ctay"
// find(words, note1) => "cat"   (the letters do not have to be in order)  
  
// note2 = "bcanihjsrrrferet"
// find(words, note2) => "cat"   (the letters do not have to be together)  
  
// note3 = "tbaykkjlga"
// find(words, note3) => "-"     (the letters cannot be reused)  
  
// note4 = "bbbblkkjbaby"
// find(words, note4) => "baby"

function find(words, note) {

  let noteFreq = charFreq(note)
  for ( let str of words) {
    let wordFreq = charFreq(str)
    let answer = true
    for (let char in wordFreq) {
      if((noteFreq[char] || 0) < wordFreq[char]) {
        answer = false
        break
      }
    }
    if(answer) return str
  }
  return "-"
}

function charFreq(str) { 
  let charObj = {}
  for(let char of str) {
    charObj[char] = (charObj[char] || 0) + 1
  }
  return charObj
}

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
const note1 = "ctay"

console.log(find(words, note1))

const note2 = "bcanihjsrrrferet"
console.log(find(words, note2)) // => "cat"   (the letters do not have to be together)  
  
const note3 = "tbaykkjlga"
console.log(find(words, note3)) // => "-"     (the letters cannot be reused)  
  
const note4 = "bbbblkkjbaby"
console.log(find(words, note4)) // => "baby"
