function deleteTBody(table) {
  if (table.tBodies.length > 0) {
    tBody = table.tBodies[0];
    tBody.parentNode.removeChild(tBody);
  }
}

function getRoundOrdersAPI(round_id) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load",function() {
    let order_data = JSON.parse(xhr.responseText);
    let orders_table = document.getElementById("orders_table");
    deleteTBody(orders_table);
    generateOrderTableBody(orders_table, order_data);
  });
  
  xhr.open("GET", `/api/rounds/orders/${round_id}`);
  xhr.send(null);
}

// function getRounds() {
//   const xhr = new XMLHttpRequest();
//   xhr.
// }

function createViewRoundButton(round_id) {
  let btn = document.createElement("input");
  btn.type = "button";
  btn.value = "View";
  btn.classList.add("btn");
  btn.classList.add("btn-warning");
  btn.addEventListener("click", viewRoundOrders(event, round_id));

  return btn
}

function generateRoundTableBody(table, data) {
  tbody = table.createTBody();
  for (let round of data) {
    let row = tbody.insertRow();
    let btn = createViewRoundButton(round_id)
    row.insertCell().appendChild(round["id"]);
    
    for (let i = 0; i < Object.keys(round).length; i++) {
      let cell = row.insertCell();
      let cellValue;

      switch (i) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
      }
    }
  }
}


function generateOrderTableBody(table, data) {
  tbody = table.createTBody();
  for (let order of data) {
    let row = tbody.insertRow();
    
    for (let i = 0; i < Object.keys(order).length; i++) {
      //key is each object inside the order (orderid, person, drink)
      let cell = row.insertCell();
      let cellValue;

      switch (i) {
        case 0:                
          cellValue = order["id"];
          break;
        case 1:              
          person = order["person"];
          cellValue = person["first_name"] + " " + person["last_name"];
          break;                
        case 2:
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
    document.getElementById("modal_round_id_span").textContent = round_id;
    close_btn = document.getElementById("close_modal").addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.style.display = "block";

    getRoundOrdersAPI(round_id);
}

function postRoundJson(initiator) {
  if (initiator !== "") {
      const xhr = new XMLHttpRequest();
      let json = JSON.stringify({
        initiator: initiator
      });      
      
      xhr.addEventListener("load", function() {
          if (xhr.status == 201) {
              alert("a new round has been opened");
              
          } else {
              alert(`Status Code: ${xhr.status}. Error: ${xhr.statusText}`);
          }
      })
      
      xhr.open("POST", "/api/rounds");
      xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");        
      xhr.send(json);
  }
}

function postOrderJson(round_id, person_id, drink_id) {
  const xhr = new XMLHttpRequest();
  let json = JSON.stringify({
    person_id: person_id,
    drink_id: drink_id
  });

  xhr.addEventListener("load", function() {
    if (xhr.status == 201) {
      alert("Order added");

      let round_id = document.getElementById("modal_round_id_span");
      let table = document.getElementById("orders_table");

      getRoundOrdersAPI(round_id.textContent);
      deleteTBody(table);
    } else {
      alert(`Status Code: ${xhr.status}. Error: ${xhr.statusText}`);
    }
  })

  xhr.open("POST", `/api/rounds/orders/${round_id}`);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.send(json);
}

document.getElementById("rounds_link").classList.add("nav-active");

document.getElementById("submit_btn").addEventListener("click", function(event){
  event.preventDefault();
  let initiator = document.getElementById("initiator");
  
  postRoundJson(initiator.value);

  //reset form now drink added
  initiator.value = "";
})

document.getElementById("add_order_btn").addEventListener("click", function(event) {
  event.preventDefault();
  let round_id = document.getElementById("modal_round_id_span");
  let person = document.getElementById("modal_add_new_order_person");
  let drink = document.getElementById("modal_add_new_order_drink");
  
  postOrderJson(round_id.textContent, person.value, drink.value);
});