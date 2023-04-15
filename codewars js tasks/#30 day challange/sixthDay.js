function doubleX(str) {
    const index = str.indexOf("x")
    const arrOfLetters = [...str]
    let expression
    if (!arrOfLetters.includes("x")) {
        expression = false
    } else if (str.charAt(index) !== str.charAt(index + 1)) {
        expression = false
    } else expression = true




    return expression
}
console.log(doubleX('axxbb'));
console.log(doubleX("abd"));

doubleX('axaxax')
doubleX('xxxxx') 