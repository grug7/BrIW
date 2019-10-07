function getRoundOrdersAPI(round_id) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load",function() {
    let order_data = JSON.parse(xhr.responseText);
    let orders_table = document.getElementById("orders_table");
    generateTableBody(orders_table, order_data);
  });

  xhr.open("GET", `http://localhost:8000/api/rounds/orders/${round_id}`);
  xhr.send(null);
}

function generateTableBody(table, data) {
    console.log(`data: ${data}`);
    for (let element of data) {
        console.log(`element: ${element}`)
        let row = table.insertRow();
        for (let key in element) {
            console.log(`key: ${key}`);
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

    getRoundOrdersAPI(round_id);
}

document.getElementById("rounds_link").classList.add("nav-active");

