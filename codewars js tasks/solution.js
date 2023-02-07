// ! I will try to understand after some weeks or maybe after month
function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}

//   ** This code below written by my self , code above is from top users
function solution(number) {
  let sum = 0;
  if (!isNaN(number)) {
    if (number <= 0) {
      return console.log((number = 0));
    }
    for (let i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  }
}
solution(10);
solution(-23);

// ** Checks for negative

function negative(num) {
  if (num <= 0) {
    return (num = 0);
  } else {
    console.log(true, num);
  }
}
negative(-650);
negative(650);
