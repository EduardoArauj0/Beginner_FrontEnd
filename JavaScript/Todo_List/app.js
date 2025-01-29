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

const limparTexto = () => {
  const TodoList = document.getElementById("TodoList");
  while (TodoList.firstChild) {
    TodoList.removeChild(TodoList.lastChild);
  }
};

const atualizarTela = () => {
  limparTexto();
  db.forEach((item) => criarItem(item.texto, item.status));
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const text = evento.target.value;
  if (tecla === "Enter") {
    db.push({ texto: text, status: "" });
    atualizarTela();
  }
};

document.getElementById("newItem").addEventListener("Keypress", inserirItem);

atualizarTela();
