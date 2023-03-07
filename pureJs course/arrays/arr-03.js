// Data

const account1 = {
  owner: "James Schmedtmann",
  movements: [200, 450, -450, 3000, -200, 650, 40, 1200],
  interestRate: 1.2, //%
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3200, -1000, 8500, -30],
  interestRate: 1.5, //%
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, //%
  pin: 3333,
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, //%
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelData = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".balance__value--in");
const labelSumOut = document.querySelector(".balance__value--out");
const labelSumInterest = document.querySelector(".balance__value--interest");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdraw";

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
        <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

const createUserName = (accs) => {
  console.log(accs);
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((str) => str.charAt(0))
      .join("");
  });
};

console.log(createUserName(accounts));

// Coding challenge

const checkDogs = (dogsJulia, dogsKate) => {
  const arr = [...dogsJulia];
  arr.pop();
  arr.shift();
  const bothArr = [...arr, dogsKate];
  bothArr.forEach((age, i) => {
    if (age > 3) {
      console.log(`Dog number ${i} is an adult, and is ${age}years old`);
    } else {
      console.log(`Dog number ${i} is still puppy 🐶image.png`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// TEST DATA 1: Julia's data [3,5,2,12,7], Kate's data [4,1,15,8,3]
