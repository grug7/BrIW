function getRoundOrdersAPI(round_id) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load",function() {
    let order_data = xhr.responseText;
    let orders_table = document.getElementById("orders_table");
    generateTableHead(orders_table, order_data);
    generateTableBody(orders_table, order_data);
  });

  xhr.open("GET", `http://localhost:8000/api/rounds/orders/${round_id}`);
  xhr.send(null);
}

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of data) {
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

    getRoundOrdersAPI(round_id);
}

document.getElementById("rounds_link").classList.add("nav-active");

