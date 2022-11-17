// most difficult in TypeScript => plan architecture in entities and/or interfaces to cover all the cases and plan how they will communicate with each other
// prevent making too many interfaces

// TypeScript will transpile everything in ES3

// constants are types in themselves
const hello1 = "world";

// can change value to the same type
let hello2 = "world";
hello2 = "bb";
// hello2 = 1 ==> error

// recommended to write the type
let hello3: string = "world";
hello3 = "kk";

// functions ==>

// unsafe method just like JS
// const getFullName = (name, surname) => {
//     return name + " " + surname;
// }

// console.log(getFullName(true, ["foo"]))

// works but not safe
// const getFullName = (name: string, surname: string) => {
//     return name + " " + surname;

//   return
// };

// console.log(getFullName("true", "[foo]"));

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};
console.log(getFullName("Kunal", "Khatri"));

// objects
// const user = {
//   name: "Kunal",
//   age: 30,
// };

// const user2 = {
//   name: "Jack",
// };

// we have to specify types but not as effective ==> ans ==> interfaces
const user: { name: string; age: number } = {
  name: "Monster",
  age: 30,
};

const user2: { name: string; age: number } = {
  name: "Jack",
  age: 1,
};

// using interfaces => recommeneded way to name them I<"N"ame> or <"N"ame>Interface
const user3: User = {
  name: "Kunal",
  age: 18,
};

interface User {
  name: string;
  age: number;
}

const user4: User = {
  name: "Kamal",
  age: 22,
};

// making some fields optional

interface User2 {
  name: string; // mandatory
  age?: number; // optional
}

const user5: User2 = {
  name: "Kunal",
  age: 9,
};

// not giving error
const user6: User2 = {
  name: "Kunal",
};

console.log(user.name);

// functions in interfaces

interface User3 {
  name: string;
  age?: number;
  getMessage(): string;
}

const user7: User3 = {
  name: "pro",
  age: 2,
  getMessage() {
    return "Hello" + this.name;
  },
};

console.log(user7.getMessage());
