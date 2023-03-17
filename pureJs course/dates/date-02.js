
// // Create a date , there are four different type of creating date

// // 1
// const now = new Date()
// console.log(now);


// // 2
// console.log(new Date("December 28, 2004"));
// console.log(new Date("1970-01-01T00:00:00.187Z"));
// console.log(new Date(0));


// Working with dates

// const future = new Date(2027, 10, 19, 15, 20,)
// console.log(future.getFullYear()); // it will return the year
// console.log(future.getMonth()); // it will return the month //! do not forget that the date is 0 based 10 is 11
// console.log(future.getDate()); // it will return the day number
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());
// console.log(future.getDay());
// console.log(future.toISOString()); // ios string
// console.log(future.getTime()); // times temp => is the milesecond which is given since january  
// console.log(new Date(1826619600000));


// console.log(Date.now()); // will give the time temp
// future.setFullYear(2040)
// console.log(future);

// ++++++++++++ new topic ******************


const future = new Date(2027, 10, 19, 15, 20,)
console.log(+future);

const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24)
const days1 = calcDaysPassed(new Date(2027, 3, 14), new Date(2027, 3, 24))
console.log(days1);

// Internationalizing Dates =. this is allow us easily format numbers and strings according to the different language , //! supporting different languages for user around the word , 

// const now = new Date();
// const options = {
//     hour: "numeric",
//     minute: "numeric",
//     day: "numeric",
//     month: "long", // 2-digit
//     year: "numeric", // 2-digit
//     weekday: "long"
// }
// const locale = navigator.language
// console.log(locale);

// document.body.innerHTML = new Intl.DateTimeFormat("best fit").format(now)
// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// alert( animals.sort() ); // АИСТ,ЯК,енот,ехидна,тигр,ёж

// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// let collator = new Intl.Collator();
// animals.sort(function(a, b) {
//   return collator.compare(a, b);
// });

// alert(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК        
const num = 384954.29

const options = {
    style: "currency",
    currency: "USD"
}
console.log("UZB :", new Intl.NumberFormat("uz").format(num));
console.log("US :", new Intl.NumberFormat("us").format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));




