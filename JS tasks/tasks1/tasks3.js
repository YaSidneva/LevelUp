//11
let arr1 = [3, 8, 2, 10, 1, 15];
let reverced = arr1.reverse();
console.log(reverced);


//12
let arr2 = [];
for (let i = 0; i <= arr1.length - 1; i++) {
    if (i % 2 != 0) {
        arr2.unshift(arr1[i]);
    }
}
console.log(arr2.length);


//13
let arr3 = [],
    arr4 = [];
for (let i = 0; i <= (arr1.length - 1) / 2; i++) {
    arr3.unshift(arr1[i]);
}

for (let i = Math.round((arr1.length - 1) / 2); i <= arr1.length - 1; i++) {
    arr4.unshift(arr1[i]);
}

arr4 = arr4.concat(arr3);
console.log(arr4);


//14 
function bubbleSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let wasSwap = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
console.log(bubbleSort(arr1));


//15.1
function selectionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort(arr1));


//15.2
function insertionSort(arr) {
    for (let i = 1, l = arr.length; i <= arr.length - 1; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}
console.log(insertionSort(arr1));