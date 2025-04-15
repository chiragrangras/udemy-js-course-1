"use stict";

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calsTempAmlitude = function (temps) {
  let max = temps[0];
  for (i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calsTempAmlitude([3,7,4]);