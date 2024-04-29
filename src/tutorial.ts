// // type annotation
// let awesomeName: string = "shakeAndBake";
// awesomeName = "something";
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let amount: number = 20;
// amount = 12 - 1;

// let isAwesome: boolean = true;
// isAwesome = false;
// isAwesome = "shakeAndBake"

// let greetings: string = "Hello Lanre";
// greetings = greetings.toLowerCase();
// console.log(greetings);

// let age: number = 25;
// age = age + 5;
// console.log(age);

// let isAdult: boolean = age >= 18;
// isAdult = !isAdult;
// console.log(isAdult);

// let tax: number | string | boolean = 10;
// tax = 100;
// tax = "20";
// tax = false;

// let requestStatus: "pending" | " success" | "error" = "pending";
// requestStatus = " success";
// requestStatus = "error";

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;

// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === "1984") {
//     foundBook = book;
//     break;
//   }
// }

// console.log(foundBook);

// let discount: number | string = 20;
// discount = "20%";

// let orderStatus: "processing" | "shipped" | "delivered" = "processing";
// orderStatus = "shipped";
// orderStatus = "cancel";

// let prices: number[] = [100, 75, 42];
// prices.push(45);
// // prices.push("34")

// let fruit: string[] = ["apple", "orange"];
// fruit.push("guava");
// fruit.push(88)

// let randomValues:[] = [];

// let emptyValues: number[] = [];

// let names = ["peter", "susan", 1];
// let array: (string | boolean)[] = ["apple", true, "orange", false];

// let temperatures: number[] = [20, 25, 30];
// // temperatures.push("hot");

// let colors: string[] = ["red", "blue", "blue"];

// // colors.push(true)

// let mixedArray: (string | number)[] = [20, "red", 25, "blue", 30, "green"];
// mixedArray.push(78);
// let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };

// let book = { title: "book", cost: 20 };
// let pen = { title: "pen", cost: 10 };
// let notebook = { title: "notebook" };

// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// let bike: { brand: string; year: number } = { brand: "yamaha", year: 2010 };
// let laptop: { brand: string; year: number } = {
//   brand: "dell",
//   year: 2017,
// };

// let product1 = { title: "shirt", price: 20 };
// let product2 = { title: "pants" };
// let products: { title: string; price?: number }[] = [product1, product2];

// products.push({ title: "shoes", price:75 });

//any
//config
//type
// function sayHi(name: string) {
//   console.log(`Hello there ${name.toUpperCase()}`);
// }

// sayHi("lanre");
// sayHi(3);

// function calculateDiscount(price: number): number {
//   const hasDiscount = true;
//   if (hasDiscount) {
//     return price;
//   }
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);

// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }
// const result = addThree(3);
// const someValue = result;

// const names: string[] = ["lanre", "Ayo", "Azeezat", "jim"];

// function isNameInlist(name: string): boolean {
//   return names.includes(name);
// }

// let nameToCheck = "peter";

// if (isNameInlist(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list`);
// } else {
//   console.log(`${nameToCheck} is not on the list`);
// }

// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateScore(
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number {
//   return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);

// let scoreWithoutPenalty = calculateScore(300);

// function sum(message: string, ...numbers: number[]): string {
//   const reduced = numbers.reduce((a, c) => a + c, 0);
//   return ` ${message} ${reduced}`;
// }

// let result = sum(" The total is", 1, 2, 3, 4, 5);
// console.log(result);

// function logMessage(message: string): void {
//   console.log(message);
//   //   return "hello world";
// }

// logMessage("Hello, Typescript");

// function processInput(input: string | number) {
//   if (typeof input === "string") {
//     console.log(`Input is of string type:${input.toUpperCase()}`);
//   } else if (typeof input === "number") {
//     console.log(`Input is of number type ${input}`);
//   } else {
//     console.log(`Input is neither of string type nor number type `);
//   }
// }

// processInput(45);
// processInput("lanre");
// processInput(true);

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// function createStudent(student: { id: number; name: string }): void {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}`);
// }

// const newStudent = {
//   id: 5,
//   name: "Ridwan",
// };

// createStudent(newStudent);

// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === "number") {
//     return input * input;
//   } else {
//     return config.reverse
//       ? input.toUpperCase().split("").reverse().join("")
//       : input.toUpperCase();
//   }
// }

// console.log(processData(10));
// console.log(processData("hello"));
// console.log(processData("hello", { reverse: true }));
type user = { id: number; name: string; isActive: boolean };
const john: user = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: user = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: user): user {
  console.log(`Hello there ${user.name.toUpperCase()}!!!`);
  return user;
}

// const john : { id: number; name: string; isActive: boolean} ={
//   id:1,
//   name: "john",
//   isActive: true,
// };
