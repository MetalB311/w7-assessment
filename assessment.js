// ************************PROBLEM 1**********************//
console.log('problem 1 is a 0(n^2) runtime and 0(1) space complexity')


let array = [28, 43, -12, 30, 4, 0,]

function addToZero(array){
// let value = false;
for (let i = 0; i < array.length; i++) {
  let check = arr[i]
  for (let j = 0; j < array.length; j++) {
     let compare = arr[j]
    if (check + compare === 0) {
        return true
      } 
    
      
    }
  }
  return false
}


console.log(addToZero([1, 2, 3, 4, 4]))


// *********************PROBLEM 2*********************//
console.log('Problem 2 has a 0(n^2) runtime, and a 0(1) space complexity')

function hasUniqueCharacters(str) {
  let checkedLetters = ''

            for (let i=0; i<str.length; i++) {
              if (checkedLetters.includes(str[i])) {
                return false
              }else {
                checkedLetters += str[i]
              }
            }
            return true
}

console.log(hasUniqueCharacters('Monday'))
console.log(hasUniqueCharacters('Moonday'))


//******************************PROBLEM 3******************** //
console.log('Problem 3 has a 0(n) runtime, and a 0(1) space complexity')

function isPangram (str) {
  let counterObj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
          }
  for (let i=0; i<str.length; i++) {
      counterObj[str[i]]++
      }

  for (let counterLetter in counterObj) {
      if (counterObj[counterLetter]===0){
          return false
      }
     }
      return true
}
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
console.log(isPangram('I like cats, but not mice'))


// *********************PROBLEM 4**************************//
console.log('Problem 4 has a 0(n) runtime, and a 0(1) time complexity')

function findLongestWord(array) {
  let maxLength = 0
    for (let i =0; i<array.length; i++) {
      if (array[i].length > maxLength) {
        maxLength = array[i].length
      }
    }
    return maxLength
}

console.log(findLongestWord(['hi', 'hello']))
console.log(findLongestWord(['hi', 'helloman']))