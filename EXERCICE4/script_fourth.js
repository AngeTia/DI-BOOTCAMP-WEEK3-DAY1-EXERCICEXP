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
// Récuperer
const listBooks = document.querySelector('.listBooks');

//
const table = document.createElement('table');

//
listBooks.appendChild(table);

//
allBooks.forEach(book => {
    //
    const row = document.createElement('tr');

    //
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`

    // 
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    if (book.alreadyRead) {
        row.style.color = 'red';
    }

    table.appendChild(row);
})