// generics allow us to provide different data Types

// if we don't provide arguement type it will be any
// Big "T" is a defualt name for generic

// <T> means we can provide different datatypes to our functions
// all generic datatypes are written inside "<>"
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user61 = {
  name: "Jack",
};

// hover below line
const result = addId(user61);
console.log("result", result);

interface UserInterface61 {
  name: string;
}

const user62: UserInterface61 = {
  name: "Kunal",
};

// hover over the below line
// const result2 = addId(user62); // not safer

const result2 = addId<UserInterface61>(user);
console.log("result", result2);

// but our function will not run on strings
const result3 = addId<string>("foo");
console.log("result", result3);

// making it more explicit
// generic type we are passing inside must be an object
// we are setting the default generic type here
const addId2 = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const result4 = addId2<UserInterface61>(user);
console.log("result", result2);

// but our function will not run on strings
// const result5 = addId2<string>("foo");  // gives error
console.log("result", result3);

// makie interface generic we add "<T>" after name
interface UserInterface62<T> {
  name: string;
  data: T;
}

// gives error
// const user63: UserInterface62 = {
//   name: "Jack",
// };

// we must provide generic type if there is no default
const user64: UserInterface62<{ meta: string }> = {
  name: "Jack",
  // Property 'meta' is missing in type '{}' but required in type '{ meta: string; }'
  // data: {},

  data: {
    meta: "foo",
  },
};

const user65: UserInterface62<string[]> = {
  name: "Jack",
  data: ["foo", "bar", "baz"],
};

// more data types
interface UserInterface63<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user66: UserInterface63<{ peta: string }, string[]> = {
  name: "Kunal",
  data: {
    peta: "data",
  },
  meta: ["Hello", "How are you ?"],
};

// suppose append is append<T>(arg1: T, arg2: T[])
// const updatedArray = append<string>("baz", ["foo", "bar"])
// const updatedArray = append<string>(1, [2, 3])

// const searchStr = "Foo"
// function someFunction<T>(fn: (a: T) => boolean, list: readonly t[]): boolean
// const hasSearchedString = SomeFunction<string>((el: string) => el.includes(searchStr), ["fooo", "bar", "baz"])
