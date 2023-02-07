// ! This is one of the most easy way to solve it
function mango(q, p) {
  return q < 3 ? q : Math.floor((q / 3) * 2) * p;
}
// TODO : The code below done by my self without any outside assisting

function mango(quantity, price) {
  let free = 0,
    cost = 0;
  for (let i = 3; i <= quantity; i++) {
    if (i % 3 === 0) {
      free++;
    }
  }
  cost = price * (quantity - free);
  console.log(
    `${quantity} mangoes for $${price} per unit = $${cost}; +${free} mangoes for free`
  );
  return cost;
}

console.log(mango(9, 5)); // ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

// function mango(quantity, price) {
//   let total = 0;
//   for (let i = 1; i < quantity; i++) {
//     if (i % 2 !== 0) {
//       total += i;
//     }
//   }
//   console.log(
//     `${quantity} mangoes for $${price} per unit = $${
//       price * (quantity - total)
//     } ${total ? "+" + total + " mango for free" : "no mango for free"}  `
//   );
//   return total;
// }
// mango(2, 3); // ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3); // ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3); // ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
