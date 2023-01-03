// EXERCICE XP 1
// 1- Retrieve the div and console.log it
console.log(document.getElementById('container'));
// 2- Change the name “Pete” to “Richard”.
let userChange = document.getElementsByTagName('ul')[0];
console.log(userChange.firstElementChild.textContent="Richard");
// 3- Change each first name of the two <ul>'s to your name.
let changeUl = document.querySelectorAll('ul li:nth-child(1)');
changeUl.forEach(element => {
    element.textContent="Ange Tia";
});
// 4- Delete the <li> that contains the text node “Sarah”.
let delSarah = document.querySelectorAll('ul li:nth-child(2)');
console.log(delSarah[1].remove());

// Bonus - Using Javascript