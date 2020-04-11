// jshint esversion: 6

let arrAvg = function(array) {
  result = 0;
  for (let i = 0; i < array.length; i++) {
      result += array[i];
  }
return result / array.length;
};
