// ! ++++++++++ Strings ++++++++++++++++

const airline = "Tap Air Uzbekistan";
const plane = "B456";

console.log(airline.indexOf()); // this will return the first index
console.log(airline.lastIndexOf()); // this will return the last index
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
const passenger = "jOnAs",
  passengerLower = passenger.toLowerCase();
console.log(passengerLower[0].toUpperCase() + passengerLower.slice(1));

// Comparing email
const email = "hello@mail.ru";
const loginEmail = " Hello@mail.Ru \n";
const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();

//  * Slice method => needs indexes as arguments and so therefore sometimes it can be very useful to first figure out the index of part of a string to then extract that

// console.log(airline.slice(4)); // It is position where extraction start and remember that this is zero based so 0 1 2 3 4 // ! this is substring , this does not change the original string, that is because it is impossible to mutate strings they are primitive

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2)); // start counting from the end

// const checkMiddleSeat = (seat) => {
//   // B and E are the middle seat
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat 🤨");
//   } else {
//     console.log("You got lucky 😎");
//   }
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// // * Replacing

// const price = "288,97$";
// const priceUs = price.replace(",", ".");
// const announcement =
//   "All passengers come to barding door 23. Boarding door 23 !";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate")); // regular expression

// // * Booleans

// const plan = "Airbus S321la";
// console.log(plan.includes("S321"));
// console.log(plan.startsWith("Air"));
// console.log(plan.endsWith("a"));

// // Practice exercise

// const checkBaggage = (items) => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed on board");
//   } else {
//     console.log("Welcome abroad !");
//   }
// };
// checkBaggage("I have a laptop, some food and pocket knife");
// checkBaggage("Got some snacks and  a gun for protection");
// checkBaggage("Socks and camera");

// // * Split method in js =>  it allows us to split a string into multiple parts based ON A devider string

// const [firstName, lastName] = "Abdulfattox Shavkatov".split("");

// const capitalizeName = (nam) => {
//   const name = nam.split(" ");
//   const nameUpper = [];

//   for (const n of name) {
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1)); // * The fist method
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(" "));
// };

// capitalizeName("jessica an smith davis");
// capitalizeName("john smilga");
// capitalizeName("josh comeau");

// console.log("hello".lastIndexOf());

// // ! padding => string means to add number of characters until the string has certain desired length'

// const message = "Go to gate 23";
// console.log(message.padStart(25, "+").padEnd(30, "+")); // The first param is the length, and second is the character

// const maskCreditCard = (number) => {
//   const str = number + "";
//   const last = str.slice(-4).padStart(str.length, "x");
//   console.log(last);
// };
// maskCreditCard(556778897867655789);
// maskCreditCard("87657445677887765");

// //  ! Repeat method in js =>  it allows us to repeat the same string multiple times,

// const message2 = "Bad weather... All Departures Delayed... ";
// console.log(message2.repeat(5));

// const planeLine = (n) => {
//   console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
// };
// planeLine(5);
// planeLine(12);
// planeLine(2);

// const camelCaseFunction = (...str) => {
//   const words = str;
//   const arr = [];
//   let count = 0;
//   for (const word of words) {
//     count++;
//     let lower = word.toLowerCase().trim();
//     const [first, second] = lower.split("_");
//     let concat = `${first}${second
//       .replace(second[0], second[0].toUpperCase())
//       .padEnd(20)}${"✅".repeat(count)}`;
//     arr.push(concat);
//   }
//   console.log(count);
//   return arr;
// };

// console.log(
//   camelCaseFunction(
//     "underscore_case ",
//     "first_name",
//     "Some_Variable",
//     "Calculation_age",
//     "delayed_departure",
//     "gn_ehehe",
//     "ghi_ghds",
//     "gr_popr"
//   )
// );

const flights =
  "_Delayed_Departure;fao937661009;txl95959;11:25+_Arrival;bru516513204;fao937661009;11:45+_Delayed_Arrival;hel78974566;fao937661009;12:05+_Departure;fao937661009;lis123354145;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

// const data = flights.split("+");

// const correctData = (data) => {
//   let messages;
//   let ab = [];
//   for (const sentence of data) {
//     const lowerSentence = sentence.toLowerCase();
//     const [first, second, third, fourth] = lowerSentence.split(";");

//     const [firstIndex, secondIndex] = first.slice(1).split("_");
//     const firstWord = `${convertFirstLetterToUppercase(
//       firstIndex
//     )} ${convertFirstLetterToUppercase(secondIndex)}`;
//     const secondWord = second.slice(0, 3).toUpperCase();
//     const thirdWord = third.slice(0, 3).toUpperCase();
//     const fourthWord = fourth.replace(":", "h");

//     messages =
//       `${firstWord} from ${secondWord} to ${thirdWord} (${fourthWord})`.split(
//         "\n"
//       );

//     // const [firstMessage, secondMessage, thirdMessage, FourthMessage] = a;
//     console.log(messages);
//   }
// };

// function convertFirstLetterToUppercase(str) {
//   return str ? str.replace(str[0], str[0].toUpperCase()) : "";
// }
// // console.log(correctData(data));
// correctData(data);
