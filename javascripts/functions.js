// jshint esversion: 6

//Req. 3-B
let arrAvg = (avg) => {
  result = 0;

  for (let i = 0; i < avg.length; i++) {
      result += avg[i];
  }
return result / avg.length;
};

//Req. 3-C
let arrMax = (max) => {
  maxResult = 0;

    max.forEach(function(max) {
      if(maxResult < max)
      maxResult = max;
});
return maxResult;
};

//Req. 3-D
let sumEvens = (sum) => {
  sumResult = 0;

    for (let x of sum) {
      if (x % 2 == 0) {
      sumResult = sumResult + x;
        }
    }
return sumResult;
};
