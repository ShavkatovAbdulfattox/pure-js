// ! The clever solution
function trim(arr, size) {
  return arr.length <= size
    ? arr
    : arr.slice(0, arr.length > 3 ? size - 3 : size) + "...";
}

// TODO  The code below written by my self, the above is by professionals

function trim(str, n) {
  if (n <= 1) {
    return `${str[0]}...`;
  }
  if (str <= n) {
    return str;
  }
  let text = str.length > n ? str.slice(0, n - 3) + "..." : str;
  return text;
}
console.log(trim("Creating kata is fun", 1));
