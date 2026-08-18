# Preguntas

## ¿Qué validaciones está realizando HTML sin haber escrito todavía JavaScript?

HTML está validando campos vacíos con el atributo 'required' en los input. Está validando el formato del correo para que coincida con algo como "nombre@ejemplo.com".

## ¿Qué guarda realmente la variable form?

Guarda una copia del elemento HTML `<form id="paymentForm" method="post">` y sus nodos hijos.

## ¿Qué función tiene preventDefault()?

Evita que el comportamiento predeterminado de un elemento HTML se ejecute, como el envío automático de un formulario.

## ¿Cómo obtenemos un elemento del DOM por su id?

Utilizamos document.getElementById('id').

## ¿Cómo obtenemos el valor de un <input>?

Accedemos a su propiedad .value.

## ¿Qué diferencia existe entre un objeto y un array?

Un objeto guarda datos mediante propiedades y valores. Un array guarda una colección de elementos ordenados por índices.

## ¿Para qué sirve push()?

Agrega un elemento al final de un array.

## ¿Por qué utilizamos JSON.stringify()?

Convierte un objeto o array de JavaScript en una cadena de texto JSON, por ejemplo, para guardarlo en localStorage.

## ¿Por qué utilizamos JSON.parse()?

Convierte una cadena de texto JSON nuevamente en un objeto o array de JavaScript.

## ¿Qué diferencia existe entre localStorage.getItem() y localStorage.setItem()?

setItem() guarda un dato en localStorage, mientras que getItem() obtiene un dato previamente guardado.

## ¿Cómo se crea un elemento HTML desde JavaScript?

Utilizamos document.createElement('elemento').

## ¿Qué función tiene appendChild()?

Agrega un elemento como hijo de otro elemento del DOM.

## ¿Qué hace forEach()?

Recorre cada elemento de un array y ejecuta una función sobre cada uno.

## ¿Por qué los datos permanecen después de recargar la página?

Porque se almacenan en localStorage, que conserva los datos aunque se recargue o cierre la página.
