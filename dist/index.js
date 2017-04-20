"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var arrayIntoSubarrays = function arrayIntoSubarrays(array) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

  var result = [];
  for (var i = 0; i < array.length; i = i + limit) {
    result.push(array.slice(i, i + limit));
  }
  return result;
};

exports.default = arrayIntoSubarrays;
module.exports = exports["default"];