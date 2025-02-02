"use strict";

let db = [
  { texto: "Estudar JS", status: "" },
  { texto: "Netflix", status: "checked" },
];

const criarItem = (texto, status, indice) => {
  const item = document.createElement("label");
  item.classList.add("todo__item");
  item.innerHTML = ` 
<input type="checkbox" ${status} data-indice = ${indice}>
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
  db.forEach((item, indice) => criarItem(item.texto, item.status, indice));
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const text = evento.target.value;
  if (tecla === "Enter") {
    db.push({ texto: text, status: "" });
    atualizarTela();
    evento.target.value = "";
  }
};

const removerItem = (indice) => {
  db.splice(indice, 1);
  atualizarTela();
};

const atualizarItem = (indice) => {
  db[indice].status = db[indice].status === "" ? "checked" : "";
  atualizarTela();
};

const clickItem = (evento) => {
  const elemento = evento.target;
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removerItem(index);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
};

document.getElementById("newItem").addEventListener("Keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickItem);

atualizarTela();
