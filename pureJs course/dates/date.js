const account1 = {
  owner: "Maruf Zakirov",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2920-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locate: "uz", // de-DE
};

const account2 = {
  owner: "Jessica Davi",
  movements: [15000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2920-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locate: "en-US",
};

const accounts = [account1, account2];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer")

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".transfer__btn");
const btnClose = document.querySelector(".close__btn");
const btnLoan = document.querySelector(".loan__btn");
const btnSort = document.querySelector(".sort__btn");

const inputLoginUserName = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".transfer__input--pin");
const inputTransferAmount = document.querySelector(".transfer__input--amount");
const inputCloseName = document.querySelector(".close__input--name");
const inputClosePin = document.querySelector(".close__input--pin");
const inputLoan = document.querySelector(".loan__input--money");

// const inputLoginUserName = document.querySelector(".login__input--user");

const formatMovement = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)))

  const daysPassed = calcDaysPassed(new Date(), date)
  console.log(daysPassed);


  if (daysPassed === 0) return "Today"
  if (daysPassed === 1) return "Yesterday"
  if (daysPassed <= 0) return `${daysPassed} days ago`

  // const day = `${date.getDate()}`.padStart(2, 0)
  // const month = `${date.getMonth() + 1}`.padStart(2, 0)
  // const year = date.getFullYear()

  // return `${day}/${month}/${year}`

  return new Intl.DateTimeFormat(locale).format(date)



}

const formatCur = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(value)
}

const displayMovements = (acc, sort = false) => {
  const sortedMovements = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  containerMovements.innerHTML = "";
  sortedMovements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdraw";

    const date = new Date(acc.movementsDates[i])

    const displayDate = formatMovement(date, acc.locale)
    const formattedMov = formatCur(mov, acc.locale, acc.currency)

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type} </div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${formatCur(acc.balance, acc.locale, acc.currency)}`;
};

const calcDisplaySummary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency)
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit, i, arr) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency)
};

const createUserName = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((str) => str.charAt(0))
      .join("");
  });
};
createUserName(accounts);

const updateUi = (currentAccount) => {
  // Display movements
  displayMovements(currentAccount);
  // Display balance
  calcDisplayBalance(currentAccount);
  // Display summary
  calcDisplaySummary(currentAccount);
};

// ============ timer ========

const startLogOutTimer = () => {

  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0)
    const sec = String(time % 60).padStart(2, 0)

    // In each call , print the remaining time to UI

    labelTimer.textContent = `You will log out after ${min}:${sec}`;


    // when timer reach to 0 , stop timer and logout
    if (time === 0) {
      clearInterval(timer)
      labelWelcome.textContent = "Log in to get started"
      containerApp.style.opacity = 0

    }
    // Decrease 1s
    time -= 1

  }

  // set time to 5 minutes
  let time = 10
  // call the timer every second
  tick()
  const timer = setInterval(tick, 1000);
  return timer

}

//  ========================= Event handler ====================================

let currentAccount, timer

// // ! FAKE ALWAYS LOGGED IN 
// currentAccount = account1
// updateUi(currentAccount)
// containerApp.style.opacity = 100


btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUserName.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]
      }`;
    containerApp.style.opacity = 100;
    // to create current date

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", // 2-digit long
      year: "numeric", // 2-digit
      // weekday: "numeric" // long narrow 
    }
    // const locale = navigator.language
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locate, options).format(now)

    // const now = new Date()
    // const day = `${now.getDate()}`.padStart(2, 0)
    // const month = `${now.getMonth() + 1}`.padStart(2, 0)
    // const year = now.getFullYear()
    // const hour = `${now.getHours()}`.padStart(2, 0)
    // const min = `${now.getMinutes()}`.padStart(2, 0)

    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`


    // Clear input fields
    inputLoginUserName.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer)

    timer = startLogOutTimer()
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date  
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

    updateUi(currentAccount);
    clearInterval(timer)
    timer = startLogOutTimer()
  }
});
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = Math.floor(inputLoan.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov > amount * 0.1)
  ) {
    setTimeout(() => {
      // Add movements
      currentAccount.movements.push(amount);

      // Add transfer date  
      currentAccount.movementsDates.push(new Date().toISOString())

      // Update Ui
      updateUi(currentAccount);

      // Reset timer
      clearInterval(timer)
      timer = startLogOutTimer()
    }, 2500)

    inputLoan.value = "";
  }
});
btnClose.addEventListener("click", (e) => {
  e.preventDefault();

  // const user = accounts.find((acc) => acc.username === inputCloseName.value);
  // console.log(user);
  if (
    currentAccount.username === inputCloseName.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseName.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});



// ! ============== 

