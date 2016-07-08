'use strict';
let words = require('./wordLists');
let concatatonic = require('../index');

console.log(concatatonic.generate(words.firstNames, words.middleNames, words.lastNames));