// DOM in TypeScript is just about using the as operator to specify the type

// someElement is of Element type
const someElement = document.querySelector(".foo");
// TypeScript doesn't know anything about markup

// element is the highest class in hierarchy
console.log("someElement", someElement);
// value is the field
// this will give an error => property "value" does not exists on type "Element"
// console.log("someElement", someElement.value);

// poor method
// coverting element to any
// console.log("SomeElement", (someElement as any).value);

// correct method
// someElement2 element is not super generic and we are sure this will an Input Element
const someElement2 = document.querySelector(".foo") as HTMLInputElement;
// HTMLInputElement has value property in it
console.log("someElement2", someElement2.value);

// adding Listner
// e is of Event type which is super generic
// Event is also generic super class like Element in hierarchy
someElement.addEventListener("blur", (e) => {
  console.log("event", e);

  // this will give an error just like above
  // we need to narrow down to use .value
  // .value is of type EventTarget
  // EventTarget is also generic
  // console.log("event", e.target.value)

  // correct code
  // in this case say we know we were working with input element
  // HTMLInputElement has .value
  const target = e.target as HTMLInputElement;
  console.log("event", target.value);
});
