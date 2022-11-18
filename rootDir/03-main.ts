// when we don't return something it's void
// hover over the function to see
const doSomething = () => {
  console.log("doSomething");
};

// recommended way
// safer
// void is undefined and null
const doSomething2 = (): void => {
  console.log("doSomething");
};

let foo: void = null;
foo = undefined;
// foo = "a" ==> gives error

// this turns off typeScript tests completely
// avoid using "any" in any case
// "any" is not a solution but start of bigger problems
// even in big projects there should be not more than 5 "any" types
let foo2: any = "foo";
foo2 = undefined;
foo2 = null;
foo2 = ["aaa", "bb", 123];
foo2 = {
  a: "kunal",
  getSome(): string {
    return "a";
  },
};

// this also does not give error
console.log(foo2.bar());

// never type
// function with never can't be executed to the end
// cannot have a reachable end point

// this gives error
// const doSomething3 = (): never =>
// //   console.log("doSomething3");
// };

// depriving of function endpoint
// no error because the code cannot ever reach the endpoint of the function
const doSomething4 = (): never => {
  throw "never";
  console.log("doSomething3");
};

// unknown
let vAny: any = 10;
let vUnknown: unknown = 10;

// any does not give error
let s1: string = vAny;

let page2: any = "1";
// this will make pageNumber2 of type string
// unsafe method
let pageNumber2 = page2 as string;
let pageNumber3: string = page2 as string;

// unknown gives error
// we don't know what type they are
// we can't directly assign unknown in other types
// let s2: string = vUnknown;

// any does not give error even here
console.log(vAny.foo());

// this gives error
// we first have to convert unknown to other data type
// console.log(vUnknown.foo());

// BONUS: Type Conversion => as
// as operator makes type assertion
let s3: string = vUnknown as string;

let pageNumber: string = "1";
// this will give an error
// TypeScript thinks we did an error
// let numericPageNumber: number = pageNumber as number;

// we have to first convert it to type unknown then to number
let numericPageNumber: number = pageNumber as unknown as number;
