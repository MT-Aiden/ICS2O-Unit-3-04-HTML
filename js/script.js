/* Created by: Aiden McLeod
* Created on: March 2022
* This file contains the JS for index.html
*/

'use strict'
/**
 * This function calculates the farenheit.
 */
function calculate () {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + celsius.toFixed(0) + '°'
}