let a = document.createElement('a');
let allBooks = [
    {
        "title": "La vie du codeur",
        "author": "Ange Tia",
        "image": "imagedulivre",
        "alreadyRead": true
    }, {
        "title": "La cybersécurité",
        "author": "Ange code",
        "image": "imagebook2",
        "alreadyRead": false
       }
];
function createTable() {
    let maTable = document.createElement("table");
    let maTable2 = document.createElement("table");

    let firstBook = Object.entries(allBooks[0]);
    let secondBook = Object.entries(allBooks[1]);
    console.log(secondBook)
    maTable.innerHTML = `
    <tr>
        <td>${firstBook[0][0]}</td>
        <td>${firstBook[1][0]}</td>
        <td>${firstBook[2][0]}</td>
        <td>${firstBook[3][0]}</td>
    </tr>
    <tr>
        <td>${firstBook[0][1]}</td>
        <td>${firstBook[1][1]}</td>
        <td>${firstBook[2][1]}</td>
        <td>${firstBook[3][1]}</td>
    </tr>`;

    maTable2.innerHTML = `
    <tr>
        <td>${secondBook[0][0]}</td>
        <td>${secondBook[1][0]}</td>
        <td>${secondBook[2][0]}</td>
        <td>${secondBook[3][0]}</td>
    </tr>
    <tr>
        <td>${secondBook[0][1]}</td>
        <td>${secondBook[1][1]}</td>
        <td>${secondBook[2][1]}</td>
        <td>${secondBook[3][1]}</td>
    </tr>`;
    maTable.setAttribute('border', "");
    maTable.style.margin = "2rem auto";
    maTable.style.textAlign= "center";
    document.body.appendChild(maTable);
    maTable2.setAttribute('border', "");
    maTable2.style.margin = "2rem auto";
    maTable2.style.textAlign= "center";
    document.body.appendChild(maTable2);

   
}
createTable()