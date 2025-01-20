#!/usr/bin/env node

"use strict"

import boxen from "boxen"
import chalk from "chalk"
import inquirer from "inquirer"
import clear from "clear"
import open from "open"

clear()
const prompt = inquirer.createPromptModule()
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        // Use chalk to style headers
        name: `Toss an ${chalk.bold('email')}?`,
        value: () => {
          open('mailto:rinkals263@gmail.com');
          console.log('\nLooking forward to hearing your message and replying to you!....See you Soon in Indox\n');
        },
      },
      {
        name: 'Exit',
        value: () => {
          console.log('Good bye, have a nice day!\n');
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green('        Rinkal Dhankariya'),
  fact: chalk.hex('#B10000')('NaN stands for Not a Number but typeof NaN is a Number'),
  github: chalk.hex('#787878')('https://github.com/Rinkal-2024'),
  npx: chalk.hex('#A1AB00')('npx Rinakl'),

  labelFact: chalk.hex('#FF6262').bold('        Fun Fact:'),
  labelGitHub: chalk.hex('#9E9E9E').bold('        GitHub:'),
  labelCard: chalk.hex('#FFF976').bold('        Card:'),
};

const me = boxen(
  [
    `${data.name}`,
    `${data.labelFact}  ${data.fact}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelCard}  ${data.npx}`,
    '',
    `${chalk.bold("Hi there! I'm Rinkal Dhankariya, I'm a passionate Software Developer")}`,
    `${chalk.bold('from India, and have a hobby for creating beautiful, cool, and responsive ')}`,
    `${chalk.bold(
      'web apps and loves solving day-to-day problems by leveraging programming tools. '
    )}`,
    `${chalk.bold(
      'Toss me an email if you want to collab!'
    )}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'blue',
  }
);

// Show the boxen
console.log(me)
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n")
console.log(tip)

prompt(questions).then((answer) => answer.action())