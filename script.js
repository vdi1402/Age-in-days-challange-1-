// challange 1: Your age in days 
function ageInDays(){
var birthYear = prompt('what year were you born...good friend');

var ageInDayss = (2021 - birthYear) * 365;

var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('box-2').appendChild(h1);
console.log(ageInDayss);}

function reset() {
    document.getElementById('ageInDays').remove();
}



