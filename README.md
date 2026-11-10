# Conversor de temperatura

Aplicación web que convierte grados Celsius a Fahrenheit y viceversa, publicada con GitHub Pages.

**Web publicada:** https://gonzalo95md.github.io/conversor/

## Qué hace

Se elige la dirección de la conversión, se escribe un número y se pulsa **Convertir**. El resultado aparece en pantalla.

| Entrada | Resultado |
|---|---|
| 100 ºC | 212 ºF |
| 0 ºC | 32 ºF |
| 212 ºF | 100 ºC |
| 32 ºF | 0 ºC |

## Fórmulas

- Celsius a Fahrenheit: `F = C × 9/5 + 32`
- Fahrenheit a Celsius: `C = (F − 32) × 5/9`

El resultado se redondea a 2 decimales.

## Ficheros

| Fichero | Función |
|---|---|
| `index.html` | **Estructura**: selector, campo numérico, botón y zona del resultado |
| `style.css` | **Aspecto**: colores, tamaños, márgenes y bordes |
| `app.js` | **Comportamiento**: lee el número, aplica la fórmula y escribe el resultado |

Sin librerías, sin imágenes y sin enlaces externos. Los ficheros se enlazan con rutas relativas.

## Cómo usarlo en local

1. Clona el repositorio:

        git clone https://github.com/gonzalo95md/conversor.git

2. Abre `index.html` con doble clic en el navegador.

## Cómo se publicó

1. `git init` y primer commit.
2. Repositorio público y vacío `conversor` en GitHub.
3. `git remote add origin ...` y `git push -u origin main`.
4. Settings, Pages, Deploy from a branch, rama `main` y carpeta `/ (root)`.
5. Retoque posterior: se añadió la conversión de Fahrenheit a Celsius y se volvió a desplegar con `commit` y `push`.

## Autor

[gonzalo95md](https://github.com/gonzalo95md)
