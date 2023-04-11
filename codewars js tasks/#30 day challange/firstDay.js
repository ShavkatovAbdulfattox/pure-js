const VOWEL = ["a", "e", "i", "o", "u"]

function getCount(str) {
    const words = [...str]
    const count = words.reduce((acc, letter) => {
        if (VOWEL.includes(letter)) {
            return acc += 1
        } else return acc

    }, 0)

    return count
}
getCount('pear tree')
