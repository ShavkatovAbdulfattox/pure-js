console.log(8 % 3);

const isEven = n => n % 2 === 0
console.log(isEven(5))
console.log(isEven(12))

// 64 bits number that => 53 are used actually to store the digits themselves rest are for storing
// the position of the decimal point.

console.log(2 ** 53 - 1);

// square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
// cubic
console.log(8 ** (1 / 3));

// Will return the max Value

console.log(Math.max(5, 89, 87, 6546, 54, 3654));
// Will return the min value
console.log(Math.min(5, 89, 87, 6546, 54, 3654));

// PI => will return 3.14
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Random function => this will give the value between 0 and 1

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + 1) + min;
};

// Math fllor , trunc cell

console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));

// It will round upo
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// will round up as high as possible
console.log(Math.cell(23.3));
console.log(Math.cell(23.9));

// it will floor it is like trunc but there is difference between them
console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
-console.log(Math.floor(-23.3));

