/*Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/

let numbers = ['Tom','Tim','Tin','Tik'];
let newWrod;


for(let word of numbers){
    newWrod =  word.concat(word);
}
console.log(newWrod);
