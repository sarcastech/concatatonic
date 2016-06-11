'use strict';

const GET_RANDOM = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.generate = function () {
  let listArray = Array.from(arguments);
  let d = new Date();
  let handle = listArray.map(GET_RANDOM).join('');
  return handle += d.toISOString().substr(20, 3);
}
