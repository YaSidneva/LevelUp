//6
let startArray = 1;
let arr1 = [];
let sumEvenDigits = 0;
let itemsEvenDigits = 0;

while (startArray <= 99) {
    arr1.push(startArray++);
}

console.log(arr1);

for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr1[i] % 2 === 0) {
        sumEvenDigits += arr1[i];
        itemsEvenDigits++;
    }
}

console.log(sumEvenDigits);
console.log(itemsEvenDigits);



//7
let justNumber = 131;
let oneAttamp = false;
for (let i = 2; i < justNumber; i++) {
    if (justNumber % i === 0 && justNumber !== 2) {
        oneAttamp = true;
    }
}
if (oneAttamp) {
    console.log(`Число ${justNumber} - составное`);
} else {
    console.log(`Число ${justNumber} - простое`);
}


//7.5.1 
let yourSqrtNumber = 33;
let i = 1;
    while ( i*i <= yourSqrtNumber) {
        
        i++;
    }
    console.log(i-1);

//7.5.2


//8 
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(12));



