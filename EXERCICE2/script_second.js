// Exercise 2 : Users And Style

// 2-  Add a “light blue” background color and some padding to the <div>.
document.querySelector("div").style.backgroundColor = "lightblue";

// 3- Do not display the <li> that contains the text node “John”.
let userChange = document.getElementsByTagName('ul')[0];
console.log(userChange.firstElementChild.style.display='none');

// 4- Add a border to the <li> that contains the text node “Pete”.
console.log(userChange.lastElementChild.style.border="solid");

// 5- Change the font size of the whole body.
console.log(document.body.style.fontSize="25px");
