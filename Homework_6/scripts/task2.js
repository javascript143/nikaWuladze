function submitAge() {
  let userAge = document.getElementById("userAge").value;
  userAge = userAge.split(", ");

  let desiredAge = 12;
  let userContainsDesiredAge = userAge.some(function (age) {
    return age === desiredAge;
  });

  if (userContainsDesiredAge) {
    document.getElementById("result").innerHTML +=
      "<br> user must be at least 12 year old";
  }
}
