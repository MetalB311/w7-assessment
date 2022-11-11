// ************************PROBLEM 1**********************//
console.log('problem 1 is a 0(n^2)')

// let arr = [1, 2, 3, 4, 5]

// function addToZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//        for (let j =0; j < arr.length; j++) {
//         if (arr[i] + arr[j] === 0){
//             console.log('True')
//         }
//      else  {
//         console.log('False')
//      }
//     }
//     }
// }

// addToZero(1, 2, 3, 4)

let array = [28, 43, -12, 30, 4, 0,]

function addToZero(array){
// let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
     if (array[i] + array[j] === 0) {
        return('true')
      } 
    else {
        return('false')
    }
  }
}
// console.log(value)
console.log(addToZero([1, 2, 3, 4, 4]))
}



// *********************PROBLEM 2*********************//


