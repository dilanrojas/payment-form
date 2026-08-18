# Hallazgos de accesibilidad

* **Campos obligatorios**

  * El `*` no comunica por sí solo que el campo es obligatorio.
  * Se debe añadir una explicación y `aria-hidden="true"` al asterisco.

* **Número de tarjeta**

  * Actualmente usa `type="number"`.
  * Usar `type="text"` + `inputmode="numeric"`.

```html
<input type="text" inputmode="numeric" autocomplete="cc-number">
```

* **Autocompletado**

  * Faltan atributos `autocomplete`.
  * Añadirlos a nombre, email, contraseña y tarjeta.

```html
autocomplete="name"
autocomplete="email"
autocomplete="current-password"
autocomplete="cc-number"
autocomplete="cc-exp"
```

* **Mensajes de error**

  * Los errores dinámicos deben ser anunciados por lectores de pantalla.
  * Usar `aria-invalid`, `aria-describedby` y/o `aria-live`.

```html
<input aria-invalid="true" aria-describedby="email-error">

<p id="email-error" role="alert">
  Introduce un email válido.
</p>
```

* **Contraste**

  * Revisar `text-gray-500` y `text-gray-400`.
  * Evitar contrastes bajos, especialmente en textos secundarios y placeholders.

* **Foco de teclado**

  * Ya existe un indicador de foco, pero conviene reforzarlo con `focus-visible`.

```html
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-600
focus-visible:ring-offset-2
```

```html
<select id="card-type" name="card-type">
```

* **Instrucciones**

  * El campo de vencimiento depende del placeholder para indicar el formato.
  * Añadir una instrucción visible asociada con `aria-describedby`.

```html
<p id="card-expiry-help">
  Formato: MM/AA.
</p>
```

* **Estado del formulario**

  * Añadir una región para anunciar resultados de validación.

```html
<div id="form-status" role="status" aria-live="polite"></div>
```

* **Contraseña**

  * Considerar un botón para mostrar/ocultar la contraseña.

```html
<button type="button" aria-pressed="false">
  Mostrar contraseña
</button>
```

* **Enlace de navegación**

  * El enlace es correcto, pero el símbolo `←` puede ocultarse de lectores de pantalla.

```html
<span aria-hidden="true">←</span>
Volver a la lista de clientes
```
