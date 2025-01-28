"use strict";

let db = [
  { texto: "Estudar JS", status: "" },
  { texto: "Netflix", status: "checked" },
  
];

const criarItem = (texto, status = "") => {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = ` 
<input type="checkbox" ${status}>
<div>${texto}</div>
<input type="button" value="X"> 
`;

  document.getElementById("TodoList").appendChild(item);
};

const atualizarTela = () => {
  db.forEach(item => criarItem (item.texto, item.status));
};

atualizarTela();
