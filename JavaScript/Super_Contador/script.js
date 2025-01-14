function contar() {
  var inicio = document.getElementById("txti");
  var fim = document.getElementById("txtf");
  var passo = document.getElementById("txtp");
  var res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "[ERRO] Impossivel contar, Faltam dados!";
  } else {
    res.innerHTML = "Contando: <br>";
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    if (p <= 0) {
      res.innerHTML =
        "[ERRO] Impossivel contar, Passo não pode ser 0! Passo será alterado para 1 <br>";
      p = 1;
    }

    if (i < f) {
      // Crescente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      // Decrescente
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1f3c1}`;
  }
}
