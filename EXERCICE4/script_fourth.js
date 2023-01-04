const allBooks = [
    {
        "title": "Harry Potter",
        "author": "Roman",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT99IrfJ3_BVvv08GQfE1GO0w7fXygEag5pblx5mb3ItWfmuUa4",
        "alreadyRead": true
    }, {
        "title": "Ducobu",
        "author": "Godi",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwG-3QUw-FWFhK5VmhLs-9m_MrABZNFCD86w&usqp=CAU",
        "alreadyRead": false
       }
];
// Récuperer la div
const listBooks = document.querySelector('.listBooks');

// Créer une table
const table = document.createElement('table');

// Ajouter la table à la div
listBooks.appendChild(table);

allBooks.forEach(book => {
    // Creer l'élément tr de la table
    const row = document.createElement('tr');

    // Contenu des titres et auteurs
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`

    // Récuperation de l'image et ajout des paramètre
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // Condition de verification de la lecture
    if (book.alreadyRead) {
        row.style.color = 'red';
    }

    // Ajout de tous les row à la table
    table.appendChild(row);
})