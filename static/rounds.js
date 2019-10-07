function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data[0]) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);

      console.log(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

function generateTableBody(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function viewRoundOrders(event, round_id) {
    event.preventDefault();
    modal = document.getElementById("orders_modal");
    close_btn = document.getElementById("close_modal").addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.style.display = "block";

    //build table with data
    // order_data = [
    //     { id: 1, person: "Greg Ford", drink: "Fight Milk" },
    //     { id: 2, person: "Chris Whitlam", drink: "Coffee" },
    //     { id: 3, person: "Kieran Hall", drink: "Suasage Juice" }
    // ];

    order_data = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
      ];
    orders_table = document.getElementById("orders_table");
    generateTableHead(orders_table, order_data);
    generateTableBody(orders_table, order_data);
}

document.getElementById("rounds_link").classList.add("nav-active");

