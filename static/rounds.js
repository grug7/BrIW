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
    for (let order of data) {
        let row = table.insertRow();
        
        for (let i = 0; i < Object.keys(order).length; i++) {
            //key is each object inside the order (orderid, person, drink)
            let cell = row.insertCell();
            let cellValue;

            switch (i) {
              case 0:
                console.log("zero");
                console.log(order["id"])
                cellValue = order["id"];
                break;
              case 1:
                console.log("one");
                person = order["person"];
                cellValue = person["first_name"] + " " + person["last_name"];
                break;                
              case 2:
                console.log("two");
                cellValue = order["drink"]["name"];          
                break;
            }
            
            let text = document.createTextNode(cellValue);
            cell.appendChild(text);
        }
    }
}

function viewRoundOrders(event, round_id) {
    event.preventDefault();
    modal = document.getElementById("orders_modal");
    // modal_round_id_span = document.getElementById("modal_round_id_span");
    close_btn = document.getElementById("close_modal").addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.style.display = "block";

    getRoundOrdersAPI(round_id);
}

document.getElementById("rounds_link").classList.add("nav-active");

