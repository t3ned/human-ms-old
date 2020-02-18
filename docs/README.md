## Installation

```sh
$ npm i human-ms --save
```

Import the module

```js
const ms = require("human-ms");
```

## Usage

Strings are insensitive to cases and white-spaces

```js
// Converting human time to milliseconds
console.log(ms("2h30m")); // Expected: 9000000
console.log(ms("2 hours 30 minutes")); // Expected: 9000000
console.log("invalid units"); // Expected: null

// Converting human time to milliseconds
console.log(ms(9000000)); // Expected: 2 hours 30 minutes
console.log(ms(10000)); // Expected: 10 seconds

// Strict conversions
const { ms, human } = require("human-ms");

// Converting human time to milliseconds
console.log(ms("2h30m")); // Expected: 9000000
console.log(ms(5000)); // Expected: null

// Converting human time to milliseconds
console.log(human(9000000)); // Expected: 2 hours 30 minutes
console.log(human("2h30m")); // Expected:
```
