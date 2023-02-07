let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
const arr = [1, 2];
console.log(Array.from(arr));

// for (let field of Array.from(fields)) {
//   console.log(field);
//   field.addEventListener("focus", (event) => {
//     let text = event.target.getAttribute("data-help");
//     help.textContent += text;
//   });
//   field.addEventListener("blur", (event) => {
//     help.textContent = "";
//   });
// }
