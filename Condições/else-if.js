var idade = 22;

if (idade < 16) {
  console.log("Não vota!");
} else if (idade < 18 || idade > 65) {
  console.log("Voto Opcional!");
} else {
  console.log("Vota!");
}
var agora = new Date();
var hora = agora.getHours();

console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 6) {
  console.log("Boa madrugada rsrs");
} else if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
