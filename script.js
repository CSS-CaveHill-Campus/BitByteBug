const buttonPressed = (choice) => {
  let number = Math.floor(Math.random() * 3);

  let compChoice = "";
  if (number == 0) compChoice = "Bit";
  else if (number == 1) compChoice = "Byte";
  else compChoice = "Bug";

  let outcome = "";

  if (choice == compChoice) outcome = "DRAW";
  else if (
    (choice == "Bit" && compChoice == "Byte") ||
    (choice == "Byte" && compChoice == "Bug") ||
    (choice == "Bug" && compChoice == "Bit")
  )
    outcome = "Player Wins!";
  else outcome = "Computer Wins!";

  alert(outcome);
};
