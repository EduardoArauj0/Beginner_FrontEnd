let num = [5, 3, 2, 4, 6];

// num.push();              Adiciona o item na ultima casa
// num.length;              Mostra a quantidade de itens no vetor
// num.sort();              Coloca emm ordem crescente

/*
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/

/*
for (let pos in num) {
  num.sort();
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
*/

num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8);
if (pos == -1) {
  console.log("O valor não foi encontrado");
} else {
  console.log(`O 8 está na posição ${pos}`);
}
