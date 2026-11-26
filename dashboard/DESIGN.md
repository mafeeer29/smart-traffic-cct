
# Smart Traffic — Design System

## 1. Identidad del proyecto

- Producto: Smart Traffic.
- Organización: Centro Cultural de Telecomunicaciones (CCT-UNI).
- Concepto visual: Urban Mobility Lab.
- Público: escolares, estudiantes universitarios y visitantes.
- Personalidad: tecnológica, dinámica, urbana, educativa y amigable.
- Idioma de la interfaz: español.

La interfaz debe transmitir la experiencia de un centro
de control de una ciudad inteligente, evitando parecer
una plantilla genérica generada por inteligencia artificial.

## 2. Referencias visuales

- Uber: movilidad urbana y protagonismo de mapas.
- Linear: organización y jerarquía visual.
- IBM Carbon: visualización de datos técnicos.
- PostHog: integración de mascotas y personalidad.
- SimCity: representación visual de entornos urbanos.

Estas referencias son inspiración, no diseños para copiar.

## 3. Paleta de colores

### Identidad principal

- Guinda institucional: #781D36
- Dorado: #C9A45C
- Fondo principal: #211E24
- Superficies: #251E26
- Texto principal: #F7F0E9
- Texto secundario: #C4B8C1
- Bordes: #674754

### Colores funcionales

- Verde: #16A34A
- Amarillo: #EAB308
- Rojo: #DC2626
- Azul informativo: #2563EB

Los colores funcionales deben comunicar estados reales.
No utilizarlos indiscriminadamente como decoración.

## 4. Tipografía

- Manrope: títulos y encabezados.
- Inter: textos, botones y navegación.
- IBM Plex Mono: métricas y datos técnicos.

Jerarquía:

- Título principal: 30-36px, peso 700.
- Título de sección: 20-24px, peso 600.
- Título de componente: 14-16px, peso 600.
- Texto general: 14px, peso 400.
- Etiquetas secundarias: 12px.
- Métricas principales: 28-36px.

## 5. Distribución

Diseño desktop-first, adaptable a tablets y móviles.

La pantalla principal debe incluir:

- Navegación horizontal.
- Encabezado superior.
- Indicador del estado de conexión.
- Selector de modo real o simulación.
- Métricas principales.
- Intersección inteligente interactiva.
- Estado individual de las cuatro vías.
- Información educativa con las mascotas.
- Registro de eventos relevantes.

La intersección debe ser el elemento visual protagonista.

Evitar distribuir toda la información en tarjetas
del mismo tamaño.

## 6. Navegación

- Simulador.
- Explora.
- Analiza.
- Conectividad.
- Aprende.

Utilizar iconos lineales consistentes.
Se recomienda Lucide Icons.

## 7. Componentes

### Tarjetas

- Superficie oscura neutra.
- Bordes discretos de 1px.
- Radio de borde entre 8px y 12px.
- Sombras suaves o inexistentes.
- Espaciado interno entre 16px y 24px.

### Botones

- Color principal guinda.
- Estados hover y focus visibles.
- Transiciones suaves.
- Etiquetas claras y breves.
- Evitar botones excesivamente redondeados.

### Gráficas

- Etiquetas fáciles de interpretar.
- Colores coherentes con el sistema.
- Animaciones suaves.
- Evitar efectos tridimensionales innecesarios.
- Mostrar unidades de medida.

## 8. Intersección inteligente

Representación digital de una intersección de cuatro vías:

- Norte.
- Sur.
- Este.
- Oeste.

Elementos visuales:

- Carreteras.
- Carriles.
- Cruces peatonales.
- Cuatro semáforos.
- Cuatro sensores.
- Vehículos ilustrados.
- Elementos urbanos.
- Indicadores de detección.

En modo simulación, los vehículos podrán animarse.

En modo real, los estados deberán corresponder
a la información recibida mediante MQTT.

No presentar vehículos simulados como mediciones reales.

La representación debe construirse mediante SVG
y componentes React reutilizables.

## 9. Interactividad y movimiento

Utilizar animaciones con propósito:

- Cambio de luces de los semáforos.
- Movimiento de vehículos simulados.
- Pulsos al detectar vehículos.
- Actualización de contadores.
- Transiciones entre vistas.
- Aparición de eventos y alertas.
- Cambio de expresión de las mascotas.

Duración recomendada para transiciones de interfaz:
150-300ms.

Evitar animaciones decorativas constantes que distraigan.

Respetar la preferencia prefers-reduced-motion.

## 10. Mascotas oficiales

Telequito y Telequita son los asistentes educativos
del CCT-UNI.

Utilizar exclusivamente los recursos gráficos oficiales.

### Expresiones

- Explicando: información educativa.
- Pensando: procesamiento de información.
- Preocupado/a: congestión o errores.
- Celebrando: funcionamiento correcto.
- Dúo: bienvenida y presentación.

Las mascotas deben acompañar la experiencia
sin ocupar espacio innecesario.

Conservar sus proporciones, colores e identidad visual.

## 11. Experiencia educativa

Incluir una sección llamada:

"Tu ciudad, tus decisiones"

Escenarios de simulación:

- Tráfico normal.
- Hora punta.
- Congestión vehicular.

Permitir que el visitante comprenda:

- Cómo funcionan los sensores.
- Cómo se comunican los ESP32.
- Qué función cumple MQTT.
- Cómo se toman decisiones adaptativas.
- Cómo las telecomunicaciones ayudan a la movilidad.

Usar mensajes breves, comprensibles y educativos.

## 12. Modos de funcionamiento

### Modo simulación

- Datos generados por software.
- Escenarios interactivos.
- Animaciones de vehículos.
- No requiere hardware conectado.

### Modo real

- Datos recibidos mediante MQTT.
- Estado de sensores y semáforos.
- Conteo de detecciones.
- Indicadores de conectividad.
- Alertas de desconexión.

Diferenciar claramente ambos modos.

No inventar métricas cuando no existan datos disponibles.

## 13. Reglas de diseño

### Hacer

- Priorizar la claridad visual.
- Mantener una identidad urbana reconocible.
- Combinar información técnica e interacción.
- Utilizar espacios y jerarquías intencionales.
- Incorporar detalles gráficos personalizados.
- Mantener componentes reutilizables.
- Diseñar para una demostración presencial.
- Garantizar contraste y legibilidad.

### Evitar

- Degradados morados genéricos.
- Glassmorphism excesivo.
- Efectos neón innecesarios.
- Tarjetas gigantes sin propósito.
- Sombras exageradas.
- Emojis como sustitutos de iconos.
- Interfaces excesivamente infantiles.
- Textos largos e innecesarios.
- Animaciones que distraigan.
- Métricas ficticias presentadas como reales.
- Apariencia de plantilla genérica de IA.

## 14. Tecnologías

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- SVG.
- Lucide React (iconografía propuesta).
- Recharts (gráficas propuestas).
- MQTT (integración posterior).

Mantener el código modular y comprensible para
integrantes que están comenzando a programar.

Separar la presentación visual, la lógica de simulación
y la comunicación con el hardware.

## 15. Dirección visual V0.6

Ciudad vectorial 2D desde arriba (SVG), con sombras discretas, vegetación natural, asfalto grafito, edificios crema y vehículos del mismo lenguaje visual. Evitar fondos urbanos fotorrealistas y efectos excesivos. Mantener el logo oficial y Smart Traffic tipográfico, sin referencias a eventos específicos. Priorizar mapa, estados y mascotas visibles en la primera pantalla cuando el tamaño lo permita. Las trayectorias son ilustrativas; no representan posiciones físicas medidas.
