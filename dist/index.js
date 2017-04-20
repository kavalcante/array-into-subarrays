"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrayIntoSubarrays = function arrayIntoSubarrays(array) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

  return array.map(function (item, index) {
    return index % limit === 0 ? array.slice(index, index + limit) : null;
  }).filter(function (item) {
    return item;
  });
};

exports.default = arrayIntoSubarrays;
module.exports = exports["default"];