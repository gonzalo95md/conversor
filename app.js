// 1. Guardamos en variables los elementos de la página que vamos a usar.
//    Los buscamos por su id (el mismo que escribimos en index.html).
var campo = document.getElementById("grados");
var boton = document.getElementById("convertir");
var resultado = document.getElementById("resultado");

// 2. Función que hace la conversión.
function convertir() {
  // Leemos lo que el usuario ha escrito (siempre llega como texto).
  var texto = campo.value;

  // Si el campo está vacío, avisamos y salimos de la función.
  if (texto === "") {
    resultado.textContent = "Escribe un número.";
    return;
  }

  // Convertimos el texto a número.
  var celsius = Number(texto);

  // Fórmula: Fahrenheit = Celsius x 9/5 + 32
  var fahrenheit = celsius * 9 / 5 + 32;

  // Redondeamos a 2 decimales para que no salgan números larguísimos.
  fahrenheit = Math.round(fahrenheit * 100) / 100;

  // Mostramos el resultado en pantalla.
  resultado.textContent = celsius + " ºC = " + fahrenheit + " ºF";
}

// 3. Cuando se hace clic en el botón, se ejecuta la función.
boton.addEventListener("click", convertir);
