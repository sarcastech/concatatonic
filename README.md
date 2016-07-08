# concatatonic
Small module that takes 1 or more word lists to generate a random name

##Usage

## #generate(array1, array2, etc)
The `.generate` method takes 1 or more word list arrays as arguments.
The return value will be a concatenated string taking a random word from each list passed
into the function call, and appended with a 3 digit number to help make duplicates less likely.

```javascript
let concatatonic = require('concatatonic');
let array1 = ['red', 'blue', 'green'];
let array2 = ['fish', 'dog', 'cat'];

concatatonic.generate(array1, array2); // return is reddog345
concatatonic.generate(array1, array2); // return is greenfish763
concatatonic.generate(array1, array2); // return is bluecat345
```

## Running the Tests
```javascript
npm install
npm test
```