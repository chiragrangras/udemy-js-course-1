"use stict";

/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calsTempAmlitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calsTempAmlitude(temperatures);
console.log(amplitude);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3); // [1, 2, 3, 4, 5, 6]

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // C) FIX
    value: Number(prompt("Degrees celsius:")),
  };

  // B) FIND
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// 1) Understanding the problem
// - Array transformed to string, separated by ... (comma, space, etc.)
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings needs to contain day (index + 1 )
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C...${data1[1]}°C... ${data1[2]}°C`);

const printforcasr = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str =+ `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log('... '+ str);
};

printforcasr(data1);
*/
function analysisWorkWeek(dailyHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error("Input must be an array of 7 daily hours.");
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = +(totalHours / dailyHours.length).toFixed(1);
  const maxhours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxhours);
  const maxDays = daysOfWeek[maxDayIndex];
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDays,
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analysisWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analysisWorkWeek(weeklyHours2);
console.log(analysis2);
