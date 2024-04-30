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

// type user = { id: number; name: string; isActive: boolean };
// const john: user = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };

// const susan: user = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };

// function createUser(user: user): user {
//   console.log(`Hello there ${user.name.toUpperCase()}!!!`);
//   return user;
// }

// type StringOrNumber = string | number;

// let value: StringOrNumber;
// value = "hello";
// value = 123;

// type Theme = "light" | "dark";

// let theme: Theme;
// theme = "dark";
// theme = "light";

// function setTheme(t: Theme) {
//   theme = t;
// }
// setTheme("dark");

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };

// type staff = Employee | Manager;

// function printStaffDetails(staff: staff): void {
//   if ("employees" in staff) {
//     console.log(
//       `${staff.name} is a manager in the ${staff.employees.length} employees`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department`
//     );
//   }
// }

// const jamiu: Employee = {
//   id: 1,
//   name: "jamiu",
//   department: "medical lab science",
// };
// const bamilosin: Employee = {
//   id: 2,
//   name: "alice",
//   department: "HR",
// };
// const lanre: Employee = {
//   id: 3,
//   name: "lanzy",
//   department: "tech",
// };

// const mubarak: Manager = {
//   id: 1,
//   name: "mubarak",
//   employees: [jamiu, bamilosin, lanre],
// };

// printStaffDetails(jamiu);
// printStaffDetails(bamilosin);
// printStaffDetails(mubarak);
// printStaffDetails(lanre);

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };

// const book1: Book = {
//   id: 1,
//   name: "how to cook a dragon",
//   price: 15,
// };

// const book2: Book = {
//   id: 2,
//   name: "the secret life of unicorns",
//   price: 18,
// };

// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: "Gnomes vs. Goblins: The Utlimate Guide",
//   price: 25,
//   discount: 0.15,
// };

// const propName = "age";
// type Animal = { [propName]: number };
// let tiger: Animal = { [propName]: 5 };

// interface type
// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   //method
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 123,
//   title: "deep work",
//   author: "cal newport",
//   genre: "self-help",
//   // printAuthor() {
//   //   console.log(this.author);
//   // },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
//   // //first option
//   printSomething: function (someValue) {
//     return someValue;
//   },
// second option
// printSomething: (someValue) => {
//   // console.log(this);

//   return someValue;
// },

// third option
// printSomething(someValue) {
//   return someValue;
// },
//   printAuthor: () => {
//     console.log(deepWork.author);
//   },
// };
// const result = deepWork.printSomething(88);
// console.log(result);

// deepWork.printAuthor();
// const result = deepWork.printTitle("is an awesome book");
// console.log(result);
// methods in interfaces

interface computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increase: number): number;
  storage?: number;
}

const laptop: computer = {
  id: 1,
  brand: "random brand",
  ram: 8,
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

laptop.storage = 256;
console.log(laptop.upgradeRam(8));
console.log(laptop);

interface person {
  name: string;
  getDetails(): string;
}
interface person {
  age: number;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

const person: person = {
  name: "john",
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

// person.getDetails();

interface Employee extends person {
  employeeId: number;
}
const employee = {
  name: "bayo",
  age: 28,
  employeeId: 123,
  getDetails() {
    return ` Name: ${this.name}, Age:${this.age}, Employee ID :${this.employeeId}`;
  },
};
console.log(employee.getDetails());
