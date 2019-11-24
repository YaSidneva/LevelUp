//1
let a = Number.parseInt(prompt("Введите 1 число:", ""));
let b = Number.parseInt(prompt("Введите 2 число:", ""));
let c = Number.parseInt(prompt("Введите 3 число:", ""));
let sum = 0;

if (a > 0) {
    sum += a;
}

if (b > 0) {
    sum += b;
}

if (c > 0) {
    sum += c;
}

alert("Сумма введенных положительных чисел: " + sum);


//2
let result = 0;
if ((a*b*c) >= (a+b+c)) {
    result = a*b*c +3;
} else {
    result = a + b + c + 3;
}
alert (`Максимальное значение (${a} * ${b} * ${c}), (${a} + ${b} + ${c}) + 3 = ${result}`);


//3
let x = Number.parseInt(prompt("Введите координату Х:", ""));
let y = Number.parseInt(prompt("Введите координату У:", ""));

if (x > 0 && y > 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит 1 четверти");
} else if (x < 0 && y < 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит 3 четверти");
} else if (x > 0 && y < 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит 4 четверти");
} else if (x < 0 && y > 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит 2 четверти");
} else if (x === 0 && y === 0) {
    alert("Точка с координатами (" + x + ", " + y + ") лежит в точке отсчета");
} else if (x === 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит оси ординат");
} else if (y === 0) {
    alert("Точка с координатами (" + x + ", " + y + ") принадлежит оси абсцисс");
}


//4
let arr = [];

for (let i = 0; i < 20; i++) {
    arr.push(Math.round(Math.random() * 100));
}

let min = arr[0],
    max = arr[0],
    iMin = 0,
    iMax = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (min > arr[i]) {
        min = arr[i];
        iMin = i;
    }
    if (max < arr[i]) {
        max = arr[i];
        iMax = i;
    }

}
alert("Рандомный массив " + arr + "\n" +
    "Минимальный элемент массива = " + min + " , индекс минимального элемента массива = " + iMin + "\n" +
    "Максимальный элемент массива = " + max + " , индекс максимального элемента массива = " + iMax);


//5
let sum2 = 0;

for (let i = 0; i <= arr.length - 1; i++) {
    if (!(i % 2 === 0)) {
        sum2 += arr[i];
    }
}
alert("Рандомный массив " + arr + "\n" +
    "Сумма элементов массива с нечетными индексами = " + sum2);


