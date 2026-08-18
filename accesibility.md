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

Diseñar pensando en la **accesibilidad situacional o temporal** beneficia a usuarios sin discapacidades permanentes que enfrentan limitaciones por su entorno, como usar el teléfono con una sola mano, caminar bajo luz solar intensa o tener prisa mientras realizan otra tarea.

**Autocompletado y facilitación de formularios**

- **Escenario:** Alguien haciendo una compra o registro rápido en el móvil mientras viaja en autobús.
    
- **Recomendación:** Agrega el atributo `autocomplete` adecuado a cada input (`autocomplete="email"`, `autocomplete="tel"`, `autocomplete="cc-number"`). Esto permite que el navegador o gestor de contraseñas complete los datos en un solo toque sin requerir escritura manual.
    
&nbsp;

**Subtítulos y reproducción silenciosa de medios**

- **Escenario:** Un usuario viendo un video explicativo en un ambiente ruidoso o en un lugar silencioso sin auriculares.
    
- **Recomendación:** Incluye siempre subtítulos en videos mediante el elemento `<track>` y evita activar el audio de fondo automáticamente (`autoplay`).
    

&nbsp;

&nbsp;

**Estructura y Regiones de Navegación (Landmarks)**

- **`<main>`**
    
    - **Propósito:** Define el contenido central y único del documento. Permite a los usuarios de lectores de pantalla saltar directamente al bloque principal de la página.
        
    - **Recomendaciones:** Debe existir solo un `<main>` visible por página. No debe colocarse como descendiente de `<header>`, `<nav>`, `<article>`, `<aside>` o `<footer>`.
        
- **`<nav>`**
    
    - **Propósito:** Delimita conjuntos de enlaces destinados a la navegación principal o secundaria del sitio.
        
    - **Recomendaciones:** Si incluyes más de un elemento `<nav>` en la misma página, diferencia cada uno mediante el atributo `aria-label` (por ejemplo, `aria-label="Menú principal"` y `aria-label="Pie de página"`).
        
- **`<header>` y `<footer>`**
    
    - **Propósito:** Agrupan contenido introductorio (cabecera) o información de cierre/pie de página (derechos de autor, enlaces a políticas).
        
    - **Recomendaciones:** Úsalos como regiones globales del sitio. Cuando se colocan dentro de un `<article>` o `<section>`, representan únicamente la cabecera o pie de ese bloque específico.
        
- **`<aside>`**
    
    - **Propósito:** Aloja información complementaria o tangencial al contenido principal (barras laterales, widgets, anuncios).
        
    - **Recomendaciones:** Evita colocar en un `<aside>` información que sea crítica para comprender el texto principal de la página.
        

**Encabezados e Interacción de Usuario**

- **`<h1>` a `<h6>`**
    
    - **Propósito:** Establecen la jerarquía del documento. Los usuarios de lectores de pantalla suelen navegar saltando entre encabezados para explorar la página.
        
    - **Recomendaciones:** Mantén siempre un orden secuencial (evita saltar de `<h1>` a `<h3>`). Utiliza solo un `<h1>` por página y no selecciones niveles de encabezado por cuestiones de tamaño visual (ajusta el estilo con CSS).
        
- **`<button>`**
    
    - **Propósito:** Activa acciones o scripts interactivos en la página. Recibe foco de teclado e interacción por defecto mediante las teclas `Enter` y `Espacio`.
        
    - **Recomendaciones:** No sustituyas `<button>` por un `<div>` o `<span>` con eventos de clic. Si la acción cambia la URL o navega a otra sección, usa `<a>`; para cualquier otra acción lógica, usa `<button>`.
        
- **`<a>`**
    
    - **Propósito:** Representa hipervínculos para navegar entre páginas o recursos.
        
    - **Recomendaciones:** El texto interno debe ser descriptivo por sí solo. Evita frases genéricas como "haz clic aquí" o "leer más". Si el enlace se abre en una pestaña nueva, indícalo explícitamente en el texto o con ayuda de texto oculto para lectores de pantalla.
        

**Formularios y Entradas de Datos**

- **`<label>`**
    
    - **Propósito:** Proporciona un nombre accesible a un control de formulario (`<input>`, `<select>`, `<textarea>`).
        
    - **Recomendaciones:** Vincula siempre la etiqueta al control mediante el atributo `for` haciendo coincidir exactamente el `id` del input (`<label for="email">` con `<input id="email">`). Evita depender únicamente del atributo `placeholder`.
        
- **`<fieldset>` y `<legend>`**
    
    - **Propósito:** Agrupan controles relacionados y les asignan un título contextualmente comprensible (por ejemplo, opciones de una encuesta o campos de dirección).
        
    - **Recomendaciones:** Esencial al agrupar botones de opción (`<input type="radio">`) o casillas de verificación (`<input type="checkbox">`), garantizando que la pregunta inicial descrita en `<legend>` sea anunciada en cada opción.
        

**Medios y Elementos Complejos**

- **`<img>` con `alt`**
    
    - **Propósito:** Transmite el significado o función de una imagen en texto para usuarios con discapacidad visual.
        
    - **Recomendaciones:** Incluye siempre el atributo `alt`. Si la imagen transmite información, describe su función o contenido sintéticamente. Si la imagen es puramente decorativa, utiliza un atributo vacío (`alt=""`) para que las tecnologías de asistencia la ignoren.
        
- **`<table>`, `<caption>`, `<th>` con `scope`**
    
    - **Propósito:** Estructuran datos tabulares de forma comprensible. `<caption>` titula la tabla y `<th>` junto con `scope` define si una celda encabeza una columna (`scope="col"`) o una fila (`scope="row"`).
        
    - **Recomendaciones:** Utiliza tablas únicamente para representar datos cuantitativos o estructurados, nunca para maquetar el diseño visual de la página.
        
- **`<dialog>`**
    
    - **Propósito:** Modales y ventanas emergentes nativas. Al activarse de forma nativa, atrapa el foco del teclado dentro del diálogo y permite cerrarlo con la tecla `Escape`.
        
    - **Recomendaciones:** Abre el elemento mediante el método JavaScript `.showModal()` en lugar de modificar clases CSS manualmente, asegurando así el comportamiento accesible integrado.
