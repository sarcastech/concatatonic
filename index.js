'use strict';

const GET_RANDOM = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.generate = function () {
  return Array.from(arguments).map(GET_RANDOM).join('') + new Date().toISOString().substr(20, 3);
}
