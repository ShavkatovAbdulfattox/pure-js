/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  // initialize empty result arr
  let res = [];

  // initialize empty temp arr
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);

    if (temp.length === size) {
      //  If so, push the chunk to the result array
      res.push(temp);

      // make temp arr empty
      temp = [];
    }
  }

  if (temp.length > 0) {
    res.push(temp);
  }

  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
