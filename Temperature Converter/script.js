"use strict";

const celsius = document.querySelector(".celsius");
const fahrenheit = document.querySelector(".Fahrenheit");
const kelvin = document.querySelector(".Kelvin");
const btn = document.querySelector(".btn-1");
const clear = document.querySelector(".btn-2");

function roundNo(number) {
  return Math.round(number * 100) / 100;
}

btn.addEventListener("click", function () {
  if (fahrenheit.value === "" && kelvin.value === "") {
    const celsiusValue = parseFloat(celsius.value);
    fahrenheit.value = roundNo((celsiusValue * 9) / 5 + 32);
    kelvin.value = roundNo(celsiusValue + 273.15);
  } else if (celsius.value === "" && kelvin.value === "") {
    const fahrenheitValue = parseFloat(fahrenheit.value);
    celsius.value = roundNo(((fahrenheitValue - 32) * 5) / 9);
    kelvin.value = roundNo(((fahrenheitValue - 32) * 5) / 9 + 273.15);
  } else if (celsius.value === "" && fahrenheit.value === "") {
    const kelvinValue = parseFloat(kelvin.value);
    celsius.value = roundNo(kelvinValue - 273.15);
    fahrenheit.value = roundNo(((kelvinValue - 273.15) * 9) / 5 + 32);
  }
});

clear.addEventListener("click", function () {
  celsius.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
});
