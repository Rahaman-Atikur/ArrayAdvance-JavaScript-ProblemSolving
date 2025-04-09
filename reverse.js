let numbers = [1, 2, 3, 4, 5, 6, 7];
/*numbers.reverse();
console.log(numbers);*/
let revNumbers = [];


for (let i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    console.log(num);
    revNumbers.push(num);
}
console.log(revNumbers);