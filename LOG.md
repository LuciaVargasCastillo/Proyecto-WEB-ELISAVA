# LOG · Una flor de regalo

## 17/11/2026 · Preparación de las instrucciones de trabajo con IA
Criterio: adaptar las cuatro plantillas del profesor a la investigación, conservando el concepto y sin inventar resultados ni datos personales. 1 propuesta inicial. Estado: archivos de configuración creados y subidos a GitHub.
Aprendido: separar lo que ya aparece en la investigación de las hipótesis y de las tareas que aún deben probarse.

## 17/11/2026 · Experimento de visualización de flores
Se pidió a ChatGPT que leyera CONTEXT.md, SOUL.md e INSTRUCTIONS.md y propusiera tres formas de representar mensajes de WhatsApp mediante flores: pétalos, crecimiento y presencia.
Resultado: se compararon ventajas y limitaciones y se exploró una simulación con datos ficticios. Se decidió seguir explorando flores generadas por código con símbolos distintos para cada participante (puntos para mí y estrellas para mi pareja).
Aprendido: es necesario definir la correspondencia entre datos y símbolos; los ejemplos ficticios no son resultados de los chats reales.
Estado: exploración conceptual realizada; generación definitiva con datos reales pendiente.

## 17/11/2026 · Experimento de estructura e interacción web
Se exploraron posibles interacciones y maneras de organizar la experiencia.
Decisión: diferenciar Historias (relato de los vínculos personales) y Regalos (postales y flores de datos). La interacción hover se dejó para más adelante.
Estado: ideas y navegación planteadas; sin implementación nueva en el código.

## 17/11/2026 · Revisión técnica del proyecto
Se revisaron index.html, style.css y script.js. Se detectó que la pregunta estaba dentro de una etiqueta HTML incorrecta (`<y>`) y se propuso sustituirla por `<p>`, ajustando el selector CSS de `y` a `#texto`.
Estado: corrección autorizada y aplicada en el repositorio. No se modifica script.js ni el resto del diseño.
Verificación pendiente: abrir la página en un navegador y comprobar que «Ver mi pregunta» muestra y oculta el texto al hacer clic.

## Próxima prueba pendiente · Datos convertidos en flor
Criterio: que dos variables ficticias se traduzcan en rasgos florales comparables en antes, durante y después. Estado: pendiente una implementación técnica definitiva.
Aprendido: por completar después de realizar y revisar la prueba.

## 24/11/2026 · Scroll 1 · Jardín interactivo

- Quiero: abrir la web con un jardín sobre blanco, siluetas en semitono y cuatro flores de color. Al recorrerlo con el cursor, quiero ver cómo los pétalos se despliegan y ganan puntos en secuencia.
- Criterio: que la apertura se complete aunque el cursor avance, que queden varias flores abiertas a la vez y que el cierre sea lento. El capullo debe distinguirse de la flor abierta.
- Pruebas: se pasó de cuatro corolas simples a un jardín en capas a partir de las capturas de referencia de Everbloom. Se probó primero una apertura en cuatro flores, después en todas, y luego una apertura escalonada de los pétalos con puntos. Se añadió una pausa antes del cierre de 2,6 segundos y una zona de activación que abre flores vecinas.
- Observado: el primer dibujo gustó más que la versión de pétalos demasiado regulares. El cierre inmediato cortaba el recorrido al mover el cursor. Los primeros capullos eran demasiado redondos; la versión con muchas puntas recordó a un insecto. También se percibieron los tallos demasiado juntos y las flores abiertas demasiado quietas.
- Decisión: conservar el semitono, la apertura simultánea en grupo y el cierre lento. Reducir las puntas del capullo y la densidad de tallos. Añadir un balanceo leve mientras la flor está abierta, con una fase distinta para cada flor.
- Verificación: se comprobó en código la apertura en grupo y el cierre tras la pausa. Queda revisar en navegador la última forma del capullo, la densidad y el balanceo. El jardín de esta prueba no usa datos de WhatsApp.
- Siguiente vuelta: revisar el jardín en navegador y preparar el segundo scroll. Actualizar SOUL.md, CONTEXT.md e INSTRUCTIONS.md al cerrar las decisiones de la V1.
