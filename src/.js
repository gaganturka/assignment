// Find number of digits
// num_of_digits(1000) ➞ 4
// num_of_digits(10) ➞ 2
// num_of_digits(75795559570) 


function countNum(num){

    const ans =  num.toString()
   return ans.length
}

console.log(countNum(75795559570))