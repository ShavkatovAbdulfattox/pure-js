// ** tHE FIRST ALGORITHM 
function close10(a, b) {
    const NUM = [5, 8, 9, 10]
    if (a === b) {
        return 0
    }
    else if (NUM.includes(a)) {
        return a
    } else if (NUM.includes(b)) {
        return b
    }

    else return Math.abs(0)
}

// !IS SOLVED
console.log(close10(5, 21));
// console.log(close10(13, 8));
// console.log(close10(13, 7));


// ** THE SECOND ALGORITHM 


function numberToPower(number, power) {
    // console.info(Math.log2(1024));
    // // Code here
    let num = number,
        sum
    for (let i = 1; i < power; i++) {
        number *= num
        sum = number
    }
    if (power === 0) {
        sum = 1
    } else if (power === 1) {
        sum = number
    }
    return sum
    // return sum

}
console.log(numberToPower(10, 1)); // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000



// = ======================== ======================
function in3050(a, b) {

    if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
        return true
    } else if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
        return true
    }
    else return false
}

in3050(30, 31)
in3050(30, 41)
in3050(40, 50)

// → true
// → false
// → true