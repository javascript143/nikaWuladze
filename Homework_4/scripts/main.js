// ***************
// Task 1 პირობა: შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
// ***************

let myArray = [
  "one",
  "two",
  "three",
  "for",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
let count = 0;
let filteredArray = [];

while (count < myArray.length) {
  if (count % 3 == 2) {
    filteredArray.push(myArray[count]);
  }
  count = count + 1;
}

console.log(filteredArray);

// ****************
// Task 2 პირობა: შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
// ****************

for (let count = 10; count <= 10 && count > 0; count = count - 1) {
  console.log(count);
}

// ****************
// Task 3 პირობა: მოცემული მასივიდან let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
// ****************

let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];
let filteredNmaes = [];
for (let element of names) {
  if (element != "Bob") {
    filteredNmaes.push(element);
    console.log(filteredNmaes);
  }
}

// *****************
// Task 4 პირობა: ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
// *****************

function numberPower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  console.log(result);
}

numberPower(5, 3);

// ******************
// Task 5: პირობა: შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.მაგ.
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// 6 Fizz
// 7
// 8
// 9 Fizz
// 10 Buzz
// 11
// 12 Fizz
// 13
// 14
// 15 FizzBuzz
// … 100-მდე.
// ******************

for (let number = 1; number < 100; number++) {
  if ((number % 3 == 0) & (number % 5 == 0)) {
    console.log(number + " FizzBuzz");
  } else if (number % 5 == 0) {
    console.log(number + " Buzz");
  } else if (number % 3 == 0) {
    console.log(number + " Fizz");
  } else {
    console.log(number);
  }
}

// ******************
// Task 6 პირობა: შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120.
// ******************

function factorialCalculator(number) {
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
    console.log(number);
  }
}

factorialCalculator(5);

// ******************
// Task 7 პირობა: შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
// ******************

// ******************
// Task 8 პირობა: შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
// ******************

function blankStringChecker(testString) {
  if (testString.length == 0) {
    console.log("this string is blank");
  } else {
    console.log("this string is not blank");
  }
}
blankStringChecker("dsgsf");

// *******************
// Task 9 პირობა: შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
// *******************

function stringToArray(testString) {
  console.log(testString.split(" "));
}
stringToArray("Hello, World");

// *******************
// Task 10 პირობა: შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს
// *******************
