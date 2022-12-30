let firstsaleri = prompt('Enter you salary for first month', '1');
let secondsaleri = prompt('Enter you salary for second month', '2');
let sum = Number(firstsaleri) + Number(secondsaleri);
// console.log(sum);
alert(`Your salary for two month: ${sum}$`);
const bonus = 1;
const generalbonus = sum + bonus;
// console.log(generalbonus);
alert(`Your have extra bonus! Your total salary was: ${sum}$ it's increase for ${bonus}$ and now it is: ${generalbonus}$`);

// **********3******
const minsaleri = 2000;
if (generalbonus >= minsaleri) {
    alert ('will you work next? true')
}
else {
    alert ('will you work next? false')
}
    
//*********4******
alert(!(generalbonus >= 2000) && 'I\'m out' || generalbonus >= 2000 && 'I\'m redy to work');