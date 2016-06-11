'use strict';
let words = require('./wordLists');
let nickname = require('../index');

console.log(nickname.generate(words.firstNames, words.middleNames, words.lastNames));