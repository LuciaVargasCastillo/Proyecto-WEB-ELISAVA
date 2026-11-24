# LOG · Una flor de regalo

## 28/10/2026 · Primera versión de la web

- **Trabajo.** Subí la plantilla de clase con `index.html`, `style.css`, `script.js` y `README.md`. La página tenía una introducción provisional y un botón para mostrar u ocultar la pregunta.
- **Punto de partida.** La plantilla ya permitía probar una interacción sencilla. [Primera versión](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/f79cdc6ae9716a32c8893011d5f626606e3462b1).

## 03/11/2026 · Dedicatoria y pregunta de investigación

- **Trabajo.** Incorporé la dedicatoria a las cinco personas cercanas y la pregunta sobre cómo hacer visible su acompañamiento cuando disminuye mi comunicación.
- **Decisión.** Cambié la composición de la plantilla mediante tamaños de texto más grandes y una primera paleta de crema, rosa y verde. [Cambios en HTML y CSS](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/bdf621372c9790fdbc813594342d0b6e5c0acfc0).

## 04/11/2026 · Organización de las sesiones

- **Trabajo.** Revisé la estructura del proyecto y abrí un registro para anotar lo hecho, las decisiones, los archivos modificados y los pasos pendientes.
- **Decisión.** Usar documentos Markdown para recoger la forma de trabajar, el contexto y los criterios del proyecto. [Primer registro](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/527f2ae32f808a699a66d81e7cab6c1b58c21078).

## 17–18/11/2026 · Preparación y primeras pruebas con IA

Los archivos y cambios de este bloque están fechados en GitHub el martes 17. El miércoles 18 corresponde a la sesión indicada al reconstruir el registro. El historial disponible no permite fechar por separado qué parte se hizo ese día.

### Documentos de trabajo

- **Trabajo.** Adapté las cuatro plantillas del profesor a la investigación y subí `SOUL.md`, `CONTEXT.md`, `INSTRUCTIONS.md` y `LOG.md`.
- **Aprendizaje.** Dejar claro qué venía de la investigación, qué era una hipótesis y qué quedaba por probar. [Registro de las pruebas con IA](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/d45b8adfc3ef0de25b81fc35a42681d0f627b663).

### Conversaciones convertidas en flores

- **Prueba.** Exploré tres formas de representar los mensajes de WhatsApp mediante flores: pétalos, crecimiento y presencia. Comparé las opciones con una simulación de datos ficticios.
- **Decisión.** Seguir explorando flores generadas por código y distinguir a las dos personas de la conversación con símbolos. La propuesta fue usar puntos para mis mensajes y estrellas para los de mi pareja.
- **Aprendizaje.** Cada símbolo y rasgo de la flor necesita una correspondencia clara con los datos. Quedó pendiente comparar antes, durante y después con dos variables ficticias y preparar la visualización con datos reales.

### Estructura de la web y revisión técnica

- **Decisión.** Planteé dos recorridos: **Historias** para contar los vínculos y **Regalos** para explorar las postales y flores de datos. La interacción con el cursor quedó como idea para una prueba posterior.
- **Corrección.** Reemplacé la etiqueta `<y>` por `<p>` en la pregunta y ajusté el selector CSS a `#texto`. Se conservó el botón y quedó pendiente verificarlo en navegador. [Corrección en HTML](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/f4f615439af1098f4118d570ee085a194697b270) · [Corrección en CSS](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/0cdefbf3193e13de41a78a3eb2fa374519e6949e).

## 24/11/2026 · Scroll 1 · Jardín interactivo

### Intención y criterio

Quería abrir la web con un jardín sobre blanco, textura de semitono y cuatro flores de color. Al recorrerlo con el cursor, los pétalos debían desplegarse en secuencia y ganar puntos. La apertura debía completarse aunque el cursor siguiera avanzando, con varias flores abiertas a la vez y un cierre lento.

### Secuencia de pruebas y observaciones

1. **Primer dibujo.** Probé cuatro flores simples y pasé a una composición de jardín con capas, tallos inclinados y textura de puntos a partir de las capturas de Everbloom. La primera vista previa mostró el texto pero no dibujó el jardín. Añadí una imagen de respaldo y preparé una vista previa independiente.
2. **Apertura de los pétalos.** Probé el efecto primero en las cuatro flores destacadas. Quise extenderlo a todo el jardín y recuperar el dibujo inicial porque los pétalos se veían demasiado uniformes. La prueba siguiente hizo variar la cantidad de puntos. Después combiné ese efecto con cambios de silueta y una apertura escalonada.
3. **Recorrido del cursor.** Al mover el cursor rápido, las flores empezaban a cerrarse antes de completar la apertura. Ajusté la secuencia para que terminen de abrirse y, al pasar por otras, se cierren poco a poco. Amplié la zona que activa flores cercanas y fijé el cierre en 2,6 segundos para que queden varias abiertas a la vez.
4. **Capullos y movimiento.** Probé capullos redondos, luego más afilados y con hojitas salientes. Observé que demasiadas puntas les daban aspecto de insecto. Reduje las puntas y la densidad de tallos. Añadí un balanceo leve y desfasado mientras las flores están abiertas, porque se veían demasiado quietas.

### Decisión y verificación

- **Decisión.** Conservar el fondo blanco, el semitono, los pétalos irregulares, la apertura en grupo y el cierre lento. Esta prueba del jardín usa formas generadas por código. La traducción de datos de WhatsApp a flores queda pendiente.
- **Verificación.** Las pruebas de código comprobaron la apertura en grupo, la pausa y el cierre, además del balanceo y la preferencia de movimiento reducido. Queda revisar en navegador el ritmo final, la densidad y la silueta del capullo. [Versión guardada de la web](https://github.com/LuciaVargasCastillo/Proyecto-WEB-ELISAVA/commit/6bd5af8f322841b7afd800412dd8ce4f4a889a39).

### Ajuste de la portada

- **Trabajo.** Aumenté la densidad de flores de fondo y usé tres tonos de azul. Dejé algunas flores abiertas desde el inicio, repartidas a distintas alturas y con un balanceo suave. El resto se abre al recorrer el jardín.
- **Decisión.** Las flores que forman la composición inicial permanecen abiertas. Las que se abren con el cursor conservan la pausa y el cierre lento. El siguiente paso es trabajar el texto de portada.
- **Verificación.** Comprobé en código los estados iniciales, la apertura en grupo y el regreso a la composición inicial.

### Primera imagen y nitidez del semitono

- **Observación.** Las flores abiertas daban más vida a la portada, pero quedaban abiertas durante toda la interacción. La textura se veía borrosa en algunas zonas.
- **Decisión.** Usar las flores abiertas solo como primera imagen. Con el primer movimiento del cursor, las iniciales se incorporan al mismo ciclo de apertura y cierre que las demás. El semitono conserva huecos entre los puntos claros y oscuros. Desactivé el suavizado del dibujo y usé una imagen de respaldo PNG.

### Ritmo de apertura y acento azul

- **Observación.** La apertura se percibía rápida y las flores azules se confundían entre sí.
- **Trabajo.** Alargué la apertura escalonada de 0,64 a 1,35 segundos. Añadí más flores azules de fondo y una flor principal en azul intenso.
- **Decisión.** Al salir del jardín, la composición recupera gradualmente las flores abiertas de portada. Las que se activan al recorrer el jardín conservan su pausa y su cierre lento.

## Siguientes pasos

- Revisar el primer scroll en navegador y preparar el segundo con su ficha del loop.
- Probar cómo dos variables ficticias se traducen en rasgos florales comparables antes, durante y después.
- Actualizar `SOUL.md`, `CONTEXT.md` e `INSTRUCTIONS.md` al cerrar las decisiones de la V1.
