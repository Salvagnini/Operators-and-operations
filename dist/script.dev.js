"use strict";

var firstsaleri = prompt('Enter you salary for first month', '1');
var secondsaleri = prompt('Enter you salary for second month', '2');
var sum = Number(firstsaleri) + Number(secondsaleri); // console.log(sum);

alert("Your salary for two month: ".concat(sum, "$"));
var bonus = 1;
var generalbonus = sum + bonus; // console.log(generalbonus);

alert("Your have extra bonus! Your total salary was: ".concat(sum, "$ it's increase for ").concat(bonus, "$ and now it is: ").concat(generalbonus, "$")); // **********3******

var minsaleri = 2000;

if (generalbonus >= minsaleri) {
  alert('will you work next? true');
} else {
  alert('will you work next? false');
} //*********4******


alert(!(generalbonus >= 2000) && 'I\'m out' || generalbonus >= 2000 && 'I\'m redy to work');