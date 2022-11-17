let userName: string = "Alex";

// what if we want a variable to have mutiple types
// Union operator
// use Union operator with caution
// if we don't specify the other then it is undefined by default
let pageName: string | number = "1";
pageName = "XII";

// most popular usage of Union is checking for null
// when we fetch data we don't have value for the variable at the beginning
// when we fetch the data then we change it to that datatype
let errorMessage: string | null = null;

interface UserInterface {
  name: string;
  surname: string;
}

let newUser: UserInterface | null = null;
newUser = {
  name: "Kunal",
  surname: "Khatri",
};

// this is bad...
// let someProp: string | number | null | undefined | string[] | object

// type aliases
type Id = string;
type PopularTag = string;
// convention
// this property maybe does not exist
type MaybePopularTag = PopularTag | null;

interface User2Interface {
  // readability is increased drastically
  // easily understandable
  id: Id;
  name: string;
  surname: string;
}

// not much information - vague
const popularTags: string[] = ["dragon", "coffee"];
// this is more clear and understandable
const popularTags2: PopularTag[] = ["dragon", "coffee"];
const popularTags3: MaybePopularTag = "something";
const popularTags4: MaybePopularTag = null;
// const popularTags5: MaybePopularTag = []; ==> error because it is undefined type
