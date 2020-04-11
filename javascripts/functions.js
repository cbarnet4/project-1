// jshint esversion: 6

//Req. 3-B
let arrAvg = function(avg) {
  result = 0;
  for (let i = 0; i < avg.length; i++) {
      result += avg[i];
  }
return result / avg.length;
};

//Req. 3-C
let arrMax = function(max) {
  maxResult = 0;

    max.forEach(function(max) {
      if(maxResult < max)
      maxResult = max;
});
return maxResult;
};
