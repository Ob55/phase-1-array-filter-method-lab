// Code your solution here
const sinon = require('sinon');

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
  const regex = new RegExp(`^${letters}`, 'i');
  return drivers.filter(driver => regex.test(driver));
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}