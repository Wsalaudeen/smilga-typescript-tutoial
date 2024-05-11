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

// // deepWork.printAuthor();
// // const result = deepWork.printTitle("is an awesome book");
// // console.log(result);
// // methods in interfaces

// interface computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   upgradeRam(increase: number): number;
//   storage?: number;
// }

// const laptop: computer = {
//   id: 1,
//   brand: "random brand",
//   ram: 8,
//   upgradeRam(increase) {
//     this.ram += increase;
//     return this.ram;
//   },
// };

// laptop.storage = 256;
// console.log(laptop.upgradeRam(8));
// console.log(laptop);

// interface person {
//   name: string;
//   getDetails(): string;
// }
// interface person {
//   age: number;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// const person: person = {
//   name: "john",
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// // person.getDetails();

// interface Employee {
//   employeeId: number;
// }
// const employee = {
//   name: "bayo",
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return ` Name: ${this.name}, Age:${this.age}, Employee ID :${this.employeeId}`;
//   },
// };
// console.log(employee.getDetails());

// interface manager extends person, DogOwner {
//   managePeople(): void;
// }
// const manager: manager = {
//   name: "bob",
//   age: 35,
//   dogName: "rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log("Managing people...");
//   },
// };
// manager.managePeople();
// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();
//   if (random < 0.3) {
//     return {
//       name: "john",
//     };
//   } else if (random < 0.66) {
//     return {
//       name: "lanre",
//       dogName: "rex",
//     };
//   } else {
//     return {
//       name: "bob",
//       managePeople() {
//         console.log("managing people....");
//       },
//       delegateTasks() {
//         console.log("Delegating tasks....");
//       },
//     };
//   }
// }

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// const employee: Person | DogOwner | Manager = getEmployee();

// console.log(employee);
// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }
// console.log(isManager(employee));

// //interface and type aliases
// type Score = number;
// type NumberOrString = number | string;
// type Direction = "up" | "down" | "left" | "right";

// // tuple and anums
// let person: [string, number] = ["lanre", 25];

// let date: readonly [number, number, number] = [12, 17, 2001];

// // date.push(75);
// console.log(date);

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]);
// console.log(randomPerson[1]);

// let susan: [string, number?] = ["susan"];

// enum ServerResonseStatus {
//   success,
//   Error,
// }

// interface ServerResponse {
//   result: ServerResonseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResonseStatus.Error,
//     data: ["first item", "second item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string];
// };

// function createUser(user: User): User {
//   return user;
// }

// const user: User = createUser({
//   id: 1,
//   name: "lanre salaudeen",
//   role: UserRole.Admin,
//   contact: ["salaudeenwarees@gmail.com", "08111479878"],
// });
// console.log(user);

// let someValue: any = "this is a string";

// let strLength: number = (someValue as string).length;

// console.log(strLength);

// type Bird = {
//   lanre: string;
//   breed: string;
//   // key: number;
// };

// let birdString = '{"lanre": "Eagle"}';
// let dogString = '{"breed": "poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.lanre);
// console.log(dog.breed);

// enum Status {
//   pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// const statusValue = "pending";
// const user: User = { name: "john", status: statusValue as Status };

//

// let unknownValue: unknown;
// unknownValue = "hello world";
// unknownValue = [1, 2, 3];
// unknownValue = 42.33455;

// if (typeof unknownValue == "number") {
//   unknownValue.toFixed(2);
// }

// function runSomeCode() {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error("there was error...");
//   } else {
//     throw "some error";
//   }
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//   }
// }

//  let someValue : never = 0

// type Theme = "light" | "dark";

// function checkTheme(theme: Theme): void {
//   if (theme === "light") {
//     console.log("light theme");
//     return;
//   }
//   if (theme === "dark") {
//     console.log("dark theme");
//     return;
//   }
//   theme;
// }

// enum Color {
//   Red,
//   Blue,
//   Green,
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return "Red";
//     case Color.Blue:
//       return "Blue";
//     case Color.Green:
//       return "Green";
//     default:
//       // at build time
//       let unexpectedColor: never = color;
//       // at run time
//       throw new Error(`Unexpected color value : ${color}`);
//   }
// }

// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Green));
// import { susan } from "./action";

// const {susan}= " susan";

// import newStudent, { sayHello, person, type Student } from "./action";
// // import { someValue } from "./example.js";

// sayHello("typescript");
// console.log(person);
// console.log(newStudent);

// const anotherStudent: Student = {
//   name: "bob",
//   age: 23,
// };

// console.log(anotherStudent);

// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType): void {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   }
//   if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   }
// }

// checkValue();

// equality narrowing

// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// function makeSound(animal: Animal) {
//   if ("bark" in animal) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }
// truthy/falsy guard

// function printLength(str: string | null | undefined) {
//   if (str) {
//     console.log(str.length);
//   } else {
//     console.log("no string provided");
//   }
// }

// printLength("hello");
// printLength("");
// printLength(null);
// printLength();
// printLength(undefined);

// try {
//   throw new Error("This an error");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(`caught an Error object : ${error.message} `);
//   } else {
//     console.log("unknown error......");
//   }
// }

// // function checkInput(input: Date | string): string {
// //   if (input instanceof Date) {
// //     return input.getFullYear().toString();
// //   }
// //   return input;
// // }

// // const year = checkInput(new Date());
// // const random = checkInput("2020-05-05");

// // console.log(year);
// // console.log(random);

// // type predicate

// type student = {
//   name: string;
//   study: () => void;
// };

// type user = {
//   name: string;
//   login: () => void;
// };

// type Person = student | user;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("studying") }
//     : { name: "mary", login: () => console.log("logging in") };
// };

// const person = randomPerson();
// function isStudent(person: Person): person is student {
//   // return "study" in person;
//   return (person as student).study !== undefined;
// }

// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login();
// }

// //

// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action) {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     case "decrement":
//       return state - action.amount;
//     default:
//       const unexpectedAction: never = action;
//       throw new Error(`unexpected action: ${unexpectedAction}`);
//   }
// }

// const newState = reducer(15, {
//   user: "john",
//   type: "increment",
//   amount: 5,
//   timestamp: 123456,
// });

// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// function createString(arg: string): string {
//   return arg;
// }

// function createNumber(arg: number): number {
//   return arg;
// }

// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunction<string>("hello world");
// const someNumberValue = genericFunction<number>(26);
// console.log(someStringValue, someNumberValue);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//   value: "hello world",
//   getValue() {
//     return this.value;
//   },
// };

// async function someFunc(): Promise<number> {
//   return 234450;
// }

// const result = someFunc();

// function generateStringArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);
//   return result;
// }
// console.log(generateStringArray(6, "hello"));

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// console.log(createArray<string>(5, "olanrewaju"));

// function pair<n, s>(param1: n, param2: s): [n, s] {
//   return [param1, param2];
// }

// let result = pair<number, string>(65, "orange");
// console.log(result);

// function processValue<T extends string | number>(value: T): T {
//   console.log(value);
//   return value;
// }

// processValue("bayo");
// processValue(88);
// type Product = {
//   name: string;
//   price: number;
// };
// const product: Product = {
//   name: "shoes",
// //   price: 1.99,
// // };

// // type Student = {
// //   name: string;
// //   age: number;
// // };
// // const student: Student = {
// //   name: "peter",
// //   age: 20,
// // };

// // function printName<T extends { name: string }>(input: T): void {
// //   console.log(input.name);
// // }

// // printName(student);
// // printName(product);

// // interface StoreData<T = any> {
// //   data: T[];
// // }

// // const storeNumbers: StoreData<number> = {
// //   data: [1, 2, 3, 4],
// // };
// // const randomStuff: StoreData<any> = {
// //   data: ["random", 1],
// // };

// // data is located in the data property

// // const { data } = axios.get(someUrl);
// // axios.get<{ name: string }[]>(someUrl);

// // export class Axios {
// //   get<T = any, R = AxiosResponse<T>, D = any>(
// //     url: string,
// //     config?: AxiosRequestconfig<D>
// //   );
// // }

// import { z } from "zod";

// const url = "https://www.course-api.com/react-tours-project";

// const tourSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   image: z.string(),
//   price: z.string(),
//   // something: z.number(),
// });

// type Tour = z.infer<typeof tourSchema>;

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const rawdata: Tour[] = await response.json();

//     const result = tourSchema.array().safeParse(rawdata);

//     console.log(result);

//     if (!result.success) {
//       throw new Error(`Invalid data: ${result.error}`);
//     }

//     return result.data;
//   } catch (error) {
//     const errorMsg =
//       error instanceof Error ? error.message : "there was an error...";
//     console.log(errorMsg);
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => {
//   console.log(tour.name);
// });
// import { Random } from "./types";
// import bcryptjs from "bcryptjs";
// let something = "something";

// class Book {
//   private checkedOut: boolean = false;
//   constructor(
//     readonly title: string,
//     public author: string // private someValue: number
//   ) {}

//   get info() {
//     return `${this.title} by ${this.author}`;
//   }

//   private set checkOut(checkedOut: boolean) {
//     this.checkedOut = checkedOut;
//   }
// }
// const deepWork = new Book("Deep work", "cal Newport");

// console.log(deepWork.info);

// // deepWork.checkOut = true;
// console.log(deepWork);

// deepWork.author;

// interface IPerson {
//   name: string;
//   age: number;
//   greet(): void;
// }

// class Person implements IPerson {
//   constructor(public name: string, public age: number) {}
//   greet(): void {
//     console.log(
//       `Hello, my name is ${this.name} and i am ${this.age} years old `
//     );
//   }
// }

// const hipster = new Person("shakeAndBake", 100);
// hipster.greet();

// let x = 10;
// const date = "oops" as Date;
// date.toISOStri
// function add(a: number, b: string): string | number {
//   return a + b;
// }
// const result = add(2, "4");
// console.log(result);

// const myCar = {
//   make: "toyota",
//   model: "corolla",
//   year: 2002,
// };

// type car = {
//   make: string;
//   model: string;
//   year: number;
// };

// function printCar(car: {
//   make: string;
//   model: string;
//   year: number;
//   chargeVoltage?: number;
// }) {
//   let str = `${car.make} ${car.model} ${car.year}`;
//   if (typeof car.chargeVoltage === "number") {
//     str += `//${car.chargeVoltage}v`;
//     console.log(str);
//   }
// }

// printCar({
//   make: "Tesla",
//   model: "model 3",
//   year: 2020,
//   chargeVoltage: 220,
// });

const phones: {
  mobile: {
    country: string;
    area: string;
    number: string;
  };
  [k: string]:
    | {
        country: string;
        area: string;
        number: string;
      }
    | undefined;
} = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  mobile: { country: "+1", area: "322", number: "525-4357" },
};
const y = phones["aaaaa"];

// phones.mobile;
// phones["work"]

// phones.fax;
// const x: { [k: string]: string } = {};
// x.foo = "bar";

// phones.custome_1;
// const phones: {
//   [k: string]: {
//     country: string;
//     area: string;
//     number: string;
//   };
// } = {};

// const fileExtensions = ["js", "ts"];
// //string[]

// const cars = [
//   {
//     make: "toyota",
//     model: "corolla",
//     year: 2002,
//   },
// ];

// tuples

// let car2 = [2002, "toyota", "corolla"];

// const [year, make, model] = car2;

// let myCar3: [number, string, string] = [2002, "toyota", "corolla"];
// myCar3 = ["honda", 2017, "accord"];
// myCar3 = [2017, "honda", "accord"];

// const numPair: readonly [number, number] = [4, 5];
// numPair.length;
