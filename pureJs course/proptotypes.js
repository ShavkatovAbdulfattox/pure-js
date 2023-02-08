const arr = ["Heklm", "Low", 54, 78, 8, "hello", "aff", "dasg"];

const newArray = (arr) => {
  let newValue = arr.map((item) => {
    let newStr;
    isNaN(item)
      ? item.find((str) => str[0] === "h")
      : console.log("number:  " + item);
    console.log(newStr);
  });

  return newValue;
};

newArray(arr);

Array.prototype.multiBy = function (n) {
  return this.map((arr) => arr * n);
};


