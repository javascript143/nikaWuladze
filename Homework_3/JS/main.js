// ****************
// Task 1 პირობა: შექმენით ფუნქცია, რომელიც რიცხვის კვადრატს იანგარიშებს
// ****************

function squareRoot(number) {
  alert(number * number);
}

squareRoot(5);

// ****************
//task 2 პირობა: შექმენით ფუნქცია, რომელიც ცელსიუსში მიწოდებულ ტემპერატურას გადაიყვანს ფერენჰეიტში, 1°C ტოლია 33.8°F -ის. (1°C × 9/5) + 32 = 33.8°F
// ****************

function cToF(celsius) {
  alert(celsius * 33.8);
}

cToF(5);

// ***************
// task 3 პირობა: დაწერეთ ფუნქცია, რომელიც სტრიქონს უკუღმა ატრიალებს მაგ. abcd => dcba
// ***************

// **************
// Task 4 პირობა: switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
// **************

let vegetables = "Carrot";

switch (vegetables) {
  case "Carrot":
    alert("Hello");
    break;
  case "Brocoli":
    alert("Welcome");
    break;
  default:
    alert("Neither");
}

// ***************
// Task 5 პირობა: ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა კოდის გაშვების შედეგად გამოდის ყველა ინფორმაცია რაც არასწორია, უნდა გამოიტანოს მხოლოდ და გაჩერდეს კოდი. იპოვეთ შეცდომა და გაასწორეთ იგი.
//  **************

let action = "move";

switch (action) {
  case "move":
    alert("You're moving!");
    break;
  case "jump":
    alert("You're jumping!");
    break;
  case "run":
    alert("You're running");
    break;
  default:
    alert("Invalid action.");
}
