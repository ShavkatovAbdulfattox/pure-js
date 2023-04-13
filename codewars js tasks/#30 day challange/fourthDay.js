//  ! First algorithm

function sleepIn(weekday, vacation) {
    let result
    if (weekday && vacation) result = true
    if (weekday && !vacation) result = false
    if (!weekday && vacation) result = true
    else result = false
    return result
}

// ! Second algorithm

function monkeyTrouble(aSmile, bSmile) {
    let trouble
    if (aSmile && bSmile) trouble = true
    else if (!aSmile && !bSmile) trouble = true
    else trouble = false
    return trouble
}

// ! Third algorithm

function sumDouble(a, b) {
    let sum
    if (a === b) return sum = (a + b) * 2
    else sum = a + b
    return sum
}
// ! Fourth algorithm

function stringTimes(str, n) {
    let res
    res = str.repeat(n)
    return res
}
console.log(stringTimes("af", 2));

// ! Fifth algorithm

function frontTimes(str, n) {
    let copyOfFront = str.slice(0, n)
    if (n < 3) {
        return `${copyOfFront.repeat(n)}`
    }
    else {
        return `${copyOfFront.repeat(n)}`
    }

}
console.log(frontTimes("Chocolate", 2));

function frontTimes(str, n) {
    var front = str.substring(0, 3); // get the first 3 characters of the string
    var result = "";
    for (var i = 0; i < n; i++) {
        result += front; // concatenate the front n times to the result string
    }
    return result;
}