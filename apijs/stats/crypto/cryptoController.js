
getAllCryptos()

async function getAllCryptos() {
    const containerId = randomString();

    var url = _localUrl + "/api/coinmarketcap/cryptocurrency/listings/latest";
    const response = await fetch(url);
    const data = await response.json();

    const namesAndPrices = data.data.map(crypto => ({
        name: crypto.name,
        price: crypto.quote.USD.price
    }));

    const columnNames = ["Name", "Price (USD)"];
    const rowData = namesAndPrices.map(crypto => [crypto.name, crypto.price.toFixed(2)]);

    populateCard(columnNames, rowData); // Llamar a populateCard con los nombres de columna y los datos de fila
}


async function populateCard(columnNames, rowData) {
    var cardContainer = document.getElementById("card-container");
    // Create card dynamically
    const cardDiv = document.createElement("div");
    cardDiv.classList = "card bg-light border rounded-5 mt-5 mb-5 animate__animated animate__zoomIn";
    cardDiv.style.width = "90%";

    // Create card body
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList = "card-body";

    // Create card title
    const cardTitle = document.createElement("h5");
    cardTitle.classList = "card-title";

    
    // Create table
    const table = document.createElement("table");
    table.classList = "table";

    // Create table header
    const thead = document.createElement("thead");
    const trHeader = document.createElement("tr");

    columnNames.forEach(columnName => {
        const th = document.createElement("th");
        th.textContent = columnName;
        trHeader.appendChild(th);
    });

    thead.appendChild(trHeader);
    table.appendChild(thead);

    // Create table body
    const tbody = document.createElement("tbody");

    rowData.forEach(row => {
        const tr = document.createElement("tr");

        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // Append card title and table to card body
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(table);
    cardDiv.appendChild(cardBodyDiv);

    // Append card to card container
    cardContainer.appendChild(cardDiv);
}

