import inquirer from 'inquirer';

// Prompt the user for input
const answers = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "FirstNumber"
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "SecondNumber"
    },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

// Log the user's input
console.log(answers);

// Conditional statements to perform different operations based on the selected operator
if (answers.operator === "Addition") {
    // Perform addition
    const result = answers.FirstNumber + answers.SecondNumber;
    console.log("Your Result is : ", result);
} else if (answers.operator === "Subtraction") {
    // Perform subtraction
    const result = answers.FirstNumber - answers.SecondNumber;
    console.log("Your Result is: ", result);
} else if (answers.operator === "Multiplication") {
    // Perform multiplication
    const result = answers.FirstNumber * answers.SecondNumber;
    console.log("Your Result is: ", result);
} else if (answers.operator === "Division") {
    // Perform division
    const result = answers.FirstNumber / answers.SecondNumber;
    console.log("Your Result is: ", result);
} else {
    // Invalid operator selected
    console.log("Please select a valid operator.");
}
