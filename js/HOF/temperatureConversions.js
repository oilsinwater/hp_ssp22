// const kelvin = 0; // todays forecast temperature
// const celsius = kelvin - 273; // convert forecast into celsius
// const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
// // convert to fahrenheit and rounds it to a whole number
// const newton = Math.floor(celsius * (33 / 100));

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// console.log(`The temperature is ${newton} degrees Netwon.`);

const temperature = () => {
  let kelvin = 0;
  let prop;
  let celsius = kelvin - 273; // convert forecast into celsius
  let fahrenheit = Math.floor(celsius * (9 / 5) + 32); // convert to fahrenheit and rounds it to a whole number
  let newton = Math.floor(celsius * (33 / 100)); // convert to Newton scale and rounds it to a whole number

  if (kelvin === undefined && prop !== undefined) {
    console.log("Enter a number.");
  } else if (kelvin !== undefined && prop === "newton") {
    `The temperature is ${newton} degrees Newton.`;
  } else if (kelvin !== undefined && prop === "celsius") {
    `The temperature is ${celsius} degrees Celsius.`;
  } else if (kelvin !== undefined && prop === "fahrenheit") {
    `The temperature is ${fahrenheit} degrees fahrenheit.`;
  } else {
    console.log("Enter a number and temperature format.");
  }
};
temperature(65, "newton");
console.log(temperature(65, "newton"));