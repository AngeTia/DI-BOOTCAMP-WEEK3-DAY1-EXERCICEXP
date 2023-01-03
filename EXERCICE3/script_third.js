// Exercise 3 : Change The Navbar
// 2- In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let divTag = document.querySelector("#navBar");
divTag.setAttribute('id', 'socialNetworkNavigation')

/* We are going to add a new <li> to the <ul>
1- First, create a new <li> tag (use the createElement method).
2- Create a new text node with “Logout” as its specified text.
3- Append the text node to the newly created list node (<li>).
4- Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
 */
let newElement = document.createElement('li');
newElement.innerHTML = 'Logout';
console.log(newElement);
// document.body.appendChild(newElement);
document.querySelector('ul').appendChild(newElement);
