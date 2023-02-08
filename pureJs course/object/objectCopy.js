let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let copiedPerson = JSON.parse(JSON.stringify(person));

copiedPerson.firstName = "Jane"; // disconnected

copiedPerson.address.street = "Amphitheatre Parkway";
copiedPerson.address.city = "Mountain View";

console.log(copiedPerson);
console.log(person);
