/*Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

let numbers = ['Tom','Tim','Tin','Tik'];
let result =[];
for(let newString of numbers){
   // result = result+newString;
   result += newString;
}

console.log(result);
