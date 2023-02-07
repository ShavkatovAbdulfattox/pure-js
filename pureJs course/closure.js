// ** JAVASCRIPT **

// apply(data, dataFetch);

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

const data = {
  language: ["Php", "JavaScript", "Node", "Dart", " C, C++"],
  year: 1995,
  rate: "popular",
};

const dataFetch = () => {
   console.log(
    `The languages : d, ${this.year}, ${
      this.rate
    }`
  );
};
bind(data, dataFetch);

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "john", age: 45, job: "full stack" };
const person2 = { name: "micheal", age: 19, job: "frontend" };

bind(person1, logPerson)();
bind(person2, logPerson)();

const comUrl = (com) => {
  return function (name) {
    console.log(`https://www.${name}.${com}`);
  };
};

const google = comUrl("com");
google("google");
const vk = comUrl("ru");
vk("vk");
const twitter = comUrl("com");
twitter("twitter");
