// 1. Elementos de la página que vamos a usar.
var modo = document.getElementById("modo");
var campo = document.getElementById("grados");
var boton = document.getElementById("convertir");
var resultado = document.getElementById("resultado");

// 2. Función que hace la conversión según el modo elegido.
function convertir() {
  var texto = campo.value;

  if (texto === "") {
    resultado.textContent = "Escribe un número.";
    return;
  }

  var valor = Number(texto);

  if (modo.value === "fc") {
    // Fahrenheit a Celsius: (F - 32) x 5/9
    var c = Math.round(((valor - 32) * 5 / 9) * 100) / 100;
    resultado.textContent = valor + " ºF = " + c + " ºC";
  } else {
    // Celsius a Fahrenheit: C x 9/5 + 32
    var f = Math.round((valor * 9 / 5 + 32) * 100) / 100;
    resultado.textContent = valor + " ºC = " + f + " ºF";
  }
}

// 3. Se ejecuta al hacer clic en el botón.
boton.addEventListener("click", convertir);

// 4. Al cambiar el selector, se borra el resultado anterior.
modo.addEventListener("change", function () {
  resultado.textContent = "";
});
