# Cucumber Tests for Hero_Go

## Quick Start
1. Install all the dependencies running following command:
```
yarn
```
2. You will have to set the path to *Hero_Go* extension inside of the `test-list.js` file
3. To start tests:
```
yarn test
```

## Folder Structure
```
hero_go_puppeteer/
├── src/
│   ├── specs
|   |   └── test
|   |       ├── features
|   |       |   └── test.feature
|   |       └── step-definitions
|   |           └── test.steps.ts
│   └── utils
└── test-list.js
```

In order to create tests you will need to add them to the `specs` folder.

Each test contains *features* and *step-definitions*.

Features are files written in `gherkin`.

Step Definitions are the actual `jest` tests.

Utils are just structured auxillary functions.
