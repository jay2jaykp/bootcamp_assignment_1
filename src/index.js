import fs from "fs";
import { Manager } from "./myClass.js";

import inquirer from "inquirer";

// global variable
// declaration , no assignment
let myManager;

async function whatNext() {
  // this function should ask user what they want to do next
  // provide three options 1,2,3
  // based on their answers, we call different functions
  const options = await inquirer.prompt([
    {
      message: `What do you want to do next?
    [1] Add Engineer
    [2] Add Intern
    [3] Finish Team
    `,
      name: "option",
    },
  ]);

  // question to user

  // user answers 1,2,3

  if (options.option === 1) {
    // condition if user put 1
    AddEngineer();
  } else if (options.option === 2) {
    // if user put 2
    AddIntern();
  } else {
    // if user put 3
    finishTeam();
  }
}

// create a function that takes in Manager's input
async function AddManager() {
  // asking 4 question one by one
  const managerName = await inquirer.prompt([
    {
      message: "What is your name?",
      name: "name",
    },
  ]);

  const managerId = await inquirer.prompt([
    {
      message: "What is your employeeID?",
      name: "id",
    },
  ]);

  const managerEmail = await inquirer.prompt([
    {
      message: "What is your email?",
      name: "email",
    },
  ]);

  const officeNumber = await inquirer.prompt([
    {
      message: "What is your office number?",
      name: "office_number",
    },
  ]);

  // assign these values to Class Manager
  // instanciating Manager class
  // save user input to global variable so that we can use them in our finishTeam function
  myManager = new Manager(
    managerName.name,
    managerId.id,
    managerEmail.email,
    officeNumber.office_number
  );

  // call function that gives three options to user
  whatNext();
}

async function AddEngineer() {
  // ask questions to add information about engineer

  // save engineer information into global variable

  // what next
  whatNext();
}

async function AddIntern() {
  //  ask intern's information

  // save it globally

  // what next
  whatNext();
}

async function finishTeam() {
  // generate HTML file using values provided by the user
  fs.writeFile(
    "./dist/index.html",
    `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <
          <title>Document</title>
        </head>
        <body>
          <h1 class="title">${myManager.name}</h1>
          <h2>${myManager.id}</h2>
          <h2>${myManager.email}</h2>
          <h2>${myManager.officeNumber}</h2>
        </body>
      </html>
      `,
    function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    }
  );

  // finish
  console.log("html file is ready in ./dist/index.html");
}

// call this function
AddManager();

// two types of functions
// 1. function that return SOMETHING
// 2. function that return NOTHING || void functions
