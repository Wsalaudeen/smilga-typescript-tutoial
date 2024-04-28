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

let prices: number[] = [100, 75, 42];
prices.push(45);
// prices.push("34")

let fruit: string[] = ["apple", "orange"];
fruit.push("guava");
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

function calculateDiscount(price);
