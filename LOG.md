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

### Título y posición de las flores en portada

- **Trabajo.** Añadí «Una Flor de Regalo» en Bodoni Moda debajo del jardín, dentro de la primera vista de la página.
- **Observación y ajuste.** La flor azul intensa se veía encima de la naranja. Moví la azul hacia la derecha y dejé espacio entre las dos corolas.
- **Decisión.** La portada y la composición que reaparece al salir del jardín quedan quietas. Las flores que están abiertas solo se balancean mientras se recorre el jardín con el cursor.

- **Revisión de composición.** La primera posición de la azul la acercaba demasiado a la verde. Moví la azul al centro-izquierda y la verde ligeramente a la derecha. Comprobé la distancia entre las corolas azul, naranja y verde en distintos tamaños de pantalla.

### Espacio para el texto y flores abiertas en reposo

- **Trabajo.** Reduje la altura del jardín del 76 % al 69 % de la altura visible para dejar más espacio debajo del primer scroll.
- **Decisión.** La flor verde y la rosa se suman a las que están abiertas al cargar y a las que permanecen abiertas al volver al reposo tras retirar el cursor.

### Tipografía y guía de la portada

- **Trabajo.** Ajusté «Una Flor de Regalo» a 36 px y elegí Instrument Serif para acercar el contraste de los trazos a la captura.
- **Decisión.** Coloqué «Clica en las flores de colores» junto al título para indicar cómo explorar el jardín. En pantallas estrechas, la guía se coloca debajo.

### Navegación de la portada

- **Decisión.** Sustituí la guía de texto por dos botones abajo a la derecha, junto al título. «Flores» usa el azul de la flor destacada y lleva al jardín. «Historias» lleva a la introducción del proyecto y conserva el fondo blanco con borde azul.

- **Ajuste visual.** Alargué los dos botones, redondeé los extremos y ajusté el texto a 16 px.

### Cita de portada y prueba de color

- **Trabajo.** Coloqué «Hay flores que cuentan historias que las palabras no alcanzan a contar.» arriba a la derecha del jardín.
- **Prueba.** Preparé una segunda paleta con las flores del fondo en verde oliva `#929661`. La portada principal conserva el fondo azul. Las flores destacadas mantienen sus colores en las dos versiones. La variante se abre con `?paleta=oliva`.

### Paleta definitiva de portada

- **Decisión.** Elegí el verde oliva `#929661` para las flores del fondo y como color de los botones. «Flores» va relleno y «Historias» lleva el borde en oliva. Cambié la flor azul a `#8fb3e2`.

### Cuatro flores protagonistas

- **Decisión.** La flor azul oscura pasó al conjunto verde oliva del fondo y queda cerrada en reposo. Las cuatro protagonistas de la portada y las postales son la rosa, la naranja, la verde y la azul clara.

### Tamaño de la cita y densidad del fondo

- **Observación.** La cita ocupaba demasiado espacio y su fondo tapaba parte de la flor verde. Además, había pocas flores oliva visibles en el jardín.
- **Ajuste.** Reduje el tamaño de la cita y la coloqué en una franja propia encima del dibujo. Aumenté la cantidad de flores oliva en las tres capas y dejé una proporción mayor abiertas en reposo.

### Relleno de los huecos del jardín

- **Observación.** Todavía quedaban huecos blancos entre las flores de la portada.
- **Ajuste.** Pasé de 153 a 257 flores oliva. Las repartí a intervalos por todo el ancho, con corolas de tamaños variados y más flores abiertas al cargar, incluidas las capas intermedia y delantera.

### Color de los textos de portada

- **Ajuste visual.** Puse el texto del botón «Flores» en blanco y la cita de arriba en negro.

### Ramas que aparecen con la apertura

- **Observación.** Aumentar la densidad fija llenaba demasiado el jardín en reposo. En la referencia, el volumen aparece cuando se abren las flores y empiezan a verse ramitas.
- **Ajuste.** Recuperé las 153 flores oliva. Los capullos muestran un tallo más sencillo. Las ramas y las hojas crecen por etapas al abrirse los pétalos y retroceden al cerrarse.

### Densidad en pantallas anchas

- **Observación.** En una pantalla mucho más ancha que alta, las flores dejaban más espacio blanco que en la vista previa pequeña.
- **Ajuste.** Añadí una capa de flores oliva cuya cantidad depende de la proporción del jardín. Se reparte por todo el ancho y conserva la aparición progresiva de ramitas y hojas. La composición anterior se mantiene como base en pantallas más estrechas.

### Composición y guía del jardín

- **Observación.** El primer scroll dejaba demasiado aire arriba y las flores de color necesitaban una señal clara para indicar que se podían pulsar.
- **Ajuste.** Compacté el jardín, hice más alta la flor rosa y añadí flores oliva más altas y frondosas a la izquierda. Añadí arriba la indicación «Pulsa una flor de color para ver su postal» y cuatro puntos de color que también enlazan con ellas.

## 24/11/2026 · Scroll 2 · Flores y postales

- **Intención.** Presentar cuatro flores de la portada con una postal superpuesta a cada una, sobre un fondo verde oliva más claro.
- **Primera prueba.** Coloqué las flores rosa, naranja, verde y azul en una cuadrícula que pasa de cuatro columnas a dos en pantallas estrechas. Dibujé las flores con el mismo semitono del jardín y superpuse las postales en color crema.
- **Criterio de revisión.** Cada postal debe verse como una pieza colocada sobre su flor y dejar visible parte de la corola. Los textos de las postales quedan por definir.
- **Estado.** Primera composición implementada. Queda revisarla visualmente para completar la vuelta de este scroll.

### Navegación y giro de las postales

- **Trabajo.** Enlacé cada flor principal de la portada y del segundo scroll con su propia sección. Al hacer clic o tocar la postal, se voltea para mostrar el reverso. Un segundo clic vuelve a la cara de la foto.
- **Estado.** Las cuatro secciones tienen espacios reservados para las fotos y dedicatorias de la autora.

### Marco de pantalla

- **Decisión.** Ajusté la presentación a un marco de escritorio de 1440 × 1024 px. El contenido se centra en pantallas grandes y se adapta a las pequeñas. La altura de referencia se aplica a las secciones visuales y el recorrido sigue siendo vertical.

### Recorrido directo a las postales

- **Decisión.** Retiré la cuadrícula de las cuatro postales superpuestas y el scroll final de agradecimiento. Cada flor de portada sigue llevando a su postal individual. «Historias» lleva al inicio de esas cuatro secciones.
- **Ajuste.** Dejé la indicación de pulsar una flor en cursiva y retiré los círculos de color.

- **Ajuste tipográfico.** Dejé la indicación subrayada a 12 px, en cursiva, y amplié la cita de portada a un tamaño adaptable de 16 a 22 px.

- **Etiquetas de portada.** Cambié los textos de los dos botones a «Historias» y «Kleine-Levin».

### Scroll de Historias

- **Trabajo.** Enlacé el botón «Historias» a la composición de cuatro personas diseñada por la autora. Reproduje la posición y el tamaño relativo de las ocho fotos, los textos y el fondo oliva. Las imágenes se amplían ligeramente al pasar el cursor.
- **Pendiente.** Incorporar las ocho fotos del diseño. Los espacios están preparados con el encuadre de referencia.

- **Tipografía y encuadre.** Apliqué Instrument Serif a Historias, limité los nombres al alto o ancho de su retrato y preparé un punto de encuadre individual para cada foto. Las ocho fotos son visibles en el chat y su incorporación a la web queda pendiente de disponer de los archivos.

- **Revisión.** Recuperé la composición original de Historias a petición de la autora, con la tipografía y los encuadres de la primera propuesta.

- **Pies de foto.** Apliqué Instrument Serif, la tipografía del primer scroll, y ajusté los nombres al alto o ancho de su imagen. La composición de las ocho fotos se conserva. La subida de los archivos de imagen queda pendiente.

- **Fotos incorporadas.** Subí ocho copias optimizadas al repositorio y las coloqué en la composición original. Ajusté el encuadre de cada foto dentro de su marco. Los nombres conservan la tipografía de portada y sus límites de alto o ancho.

### Página sobre el síndrome de Kleine-Levin

- **Trabajo.** El botón «Kleine-Levin» abre una página independiente. A la izquierda, una explicación breve contrastada con NIH y Cleveland Clinic en un fondo beige con el nombre del síndrome en transparencia. A la derecha, una foto de jardín enmarcada en arco y el relato personal sobre las flores y las postales como agradecimiento.
- **Decisión.** Redacté el texto personal a partir de la investigación documentada y usé una imagen de jardín generada para la composición.

- **Revisión.** Integré Kleine-Levin como un scroll debajo de la portada, con navegación interna de ida y vuelta. Usé la foto del prado que entregó la autora para todo el fondo derecho. La ventana en arco deja ver el mismo fondo por el hueco.

- **Estado de las postales.** Añadí un aviso visible en las cuatro secciones para indicar que el diseño está por determinar y que las postales siguen en desarrollo.

- **Reverso de las fotos de Historias.** Cambié el fondo de la composición a blanco. Las ocho fotos se voltean al pulsarlas y muestran entre comillas un texto provisional sobre la relación de la autora con cada persona y el Kleine-Levin.

- **Navegación.** Añadí «Volver al jardín» arriba de Historias, con el mismo estilo y destino que en Kleine-Levin.

- **Ajuste de posición.** Subí «Volver al jardín» en Historias para separarlo de la foto de Gonzalo.

- **Separación y tamaño.** Puse el regreso de Historias en una línea propia encima de las fotos y dejé los enlaces «Volver al jardín» a 12 px, como la indicación de la portada.

## Siguientes pasos

- Revisar los dos scrolls en navegador, definir el contenido de las postales y completar la ficha del segundo scroll.
- Probar cómo dos variables ficticias se traducen en rasgos florales comparables antes, durante y después.
- Actualizar `SOUL.md`, `CONTEXT.md` e `INSTRUCTIONS.md` al cerrar las decisiones de la V1.
