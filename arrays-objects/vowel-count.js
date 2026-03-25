// You are given a string consisting of lowercase words, each separated by a single space. 
// Determine how many vowels appear in the first word. Then, reverse each following word that has the same vowel count.
// https://buttondown.com/cassidoo/archive/happiness-is-a-choice-that-requires-effort-at/
// Examples:

// flippedy("cat and mice")
// > "cat dna mice"

// flippedy("banana healthy")
// > "banana healthy"

function flippedy(strs) {
  let words = strs.split(' ')
  if(words.length === 0) return ''
  
  let targetCount = vowelCount(words[0])
  
  return words.map((word, i) => {
    if( i === 0) return word

    return (vowelCount(word) === targetCount) ? reverse(word) : word
   })
   .join(' ')
}

function vowelCount(str) {
  let match = str.match(/[aeiou]/gi)
  return match ? match.length : 0
}

function reverse(str) {
  return [...str].reverse().join('')
}

console.log(flippedy("cat and mice"))