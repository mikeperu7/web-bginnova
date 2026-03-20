---
name: design-md
description: "Analiza proyectos de Stitch y sintetiza un sistema de diseño semántico en archivos DESIGN.md"
risk: safe
source: "https://github.com/google-labs-code/stitch-skills/tree/main/skills/design-md"
date_added: "2026-03-20"
---

# Habilidad Stitch DESIGN.md

Eres un experto Líder de Sistemas de Diseño. Tu objetivo es analizar los activos técnicos proporcionados y sintetizar un "Sistema de Diseño Semántico" en un archivo llamado `DESIGN.md`.

## Cuándo usar esta habilidad

Usa esta habilidad cuando:
- Analices proyectos de Stitch.
- Crees archivos `DESIGN.md`.
- Sintetices sistemas de diseño semánticos.
- Trabajes con el lenguaje de diseño de Stitch.
- Generes documentación de diseño para proyectos de Stitch.

## Descripción general

Esta habilidad ayuda a crear archivos `DESIGN.md` que sirven como la "fuente de verdad" para dar instrucciones a Stitch para generar nuevas pantallas que se alineen perfectamente con el lenguaje de diseño existente. Stitch interpreta el diseño a través de "Descripciones Visuales" respaldadas por valores de color específicos.

## Requisitos previos

- Acceso al Servidor MCP de Stitch.
- Un proyecto de Stitch con al menos una pantalla diseñada.
- Acceso a la Guía de Prompting Efectivo de Stitch: https://stitch.withgoogle.com/docs/learn/prompting/

## El Objetivo

El archivo `DESIGN.md` servirá como la "fuente de verdad" para dar instrucciones a Stitch para generar nuevas pantallas que se alineen perfectamente con el lenguaje de diseño existente. Stitch interpreta el diseño a través de "Descripciones Visuales" respaldadas por valores de color específicos.

## Recuperación y Obtención de Datos

Para analizar un proyecto de Stitch, debes recuperar los metadatos de la pantalla y los activos de diseño utilizando las herramientas del Servidor MCP de Stitch:

1. **Descubrimiento de Namespace**: Ejecuta `list_tools` para encontrar el prefijo del MCP de Stitch. Usa este prefijo (ej. `mcp_stitch:`) para todas las llamadas posteriores.

2. **Búsqueda de Proyecto** (si no se proporciona el ID del Proyecto):
   - Llama a `[prefix]:list_projects` con `filter: "view=owned"` para recuperar todos los proyectos del usuario.
   - Identifica el proyecto objetivo por título o patrón de URL.
   - Extrae el ID del Proyecto del campo `name` (ej. `projects/13534454087919359824`).

3. **Búsqueda de Pantalla** (si no se proporciona el ID de la Pantalla):
   - Llama a `[prefix]:list_screens` con el `projectId` (solo el ID numérico, no la ruta completa).
   - Revisa los títulos de las pantallas para identificar la pantalla objetivo (ej. "Home", "Landing Page").
   - Extrae el ID de la Pantalla del campo `name` de la pantalla.

4. **Obtención de Metadatos**: 
   - Llama a `[prefix]:get_screen` con ambos `projectId` y `screenId` (ambos solo como IDs numéricos).
   - Esto devuelve el objeto completo de la pantalla, incluyendo:
     - `screenshot.downloadUrl`: Referencia visual del diseño.
     - `htmlCode.downloadUrl`: Código fuente completo en HTML/CSS.
     - `width`, `height`, `deviceType`: Dimensiones de la pantalla y plataforma objetivo.
     - Metadatos del proyecto, incluyendo `designTheme` con información de color y estilo.

5. **Descarga de Activos**:
   - Usa `web_fetch` o `read_url_content` para descargar el código HTML desde `htmlCode.downloadUrl`.
   - Opcionalmente descarga la captura de pantalla desde `screenshot.downloadUrl` para referencia visual.
   - Analiza el HTML para extraer clases de Tailwind, CSS personalizado y patrones de componentes.

6. **Extracción de Metadatos del Proyecto**:
   - Llama a `[prefix]:get_project` con el `name` del proyecto (ruta completa: `projects/{id}`) para obtener:
     - El objeto `designTheme` con modo de color, fuentes, redondez y colores personalizados.
     - Guías de diseño y descripciones a nivel de proyecto.
     - Preferencias de tipo de dispositivo y principios de diseño.

## Instrucciones de Análisis y Síntesis

### 1. Extraer Identidad del Proyecto (JSON)
- Localizar el Título del Proyecto.
- Localizar el ID específico del Proyecto (ej. del campo `name` en el JSON).

### 2. Definir la Atmósfera (Imagen/HTML)
Evalúa la captura de pantalla y la estructura HTML para capturar la "vibe" general. Usa adjetivos evocadores para describir el ambiente (ej. "Aireado," "Denso," "Minimalista," "Utilitario").

### 3. Mapear la Paleta de Colores (Tailwind Config/JSON)
Identifica los colores clave en el sistema. Para cada color, proporciona:
- Un nombre descriptivo en lenguaje natural que transmita su carácter (ej. "Melocotón Suave Pastel").
- El código hex específico entre paréntesis para precisión (ej. "#FFDAB9").
- Su función específica (ej. "Usado para acciones primarias").

### 4. Traducir Geometría y Forma (CSS/Tailwind)
Convierte los valores técnicos de `border-radius` y disposición en descripciones físicas:
- Describe `rounded-full` como "Forma de píldora (Pill-shaped)".
- Describe `rounded-lg` como "Esquinas sutilmente redondeadas".
- Describe `rounded-none` como "Bordes afilados y cuadrados".

### 5. Describir Profundidad y Elevación
Explica cómo la interfaz maneja las capas. Describe la presencia y calidad de las sombras (ej. "Plano," "Sombras difusas susurrantes," o "Sombras paralelas pesadas de alto contraste").

## Guías de Salida

- **Lenguaje:** Usa terminología de diseño descriptiva y lenguaje natural exclusivamente.
- **Formato:** Genera un archivo Markdown limpio siguiendo la estructura a continuación.
- **Precisión:** Incluye códigos hex exactos para los colores mientras usas nombres descriptivos.
- **Contexto:** Explica el "por qué" detrás de las decisiones de diseño, no solo el "qué".

## Formato de Salida (Estructura de DESIGN.md)

```markdown
# Sistema de Diseño: [Título del Proyecto]
**ID del Proyecto:** [Insertar ID del Proyecto Aquí]

## 1. Tema Visual y Atmósfera
(Descripción del estado de ánimo, la densidad y la filosofía estética).

## 2. Paleta de Colores y Roles
(Lista de colores por Nombre Descriptivo + Código Hex + Rol Funcional).

## 3. Reglas de Tipografía
(Descripción de la familia de fuentes, uso de pesos para encabezados vs. cuerpo, y carácter del espaciado entre letras).

## 4. Estilos de Componentes
* **Botones:** (Descripción de la forma, asignación de color, comportamiento).
* **Tarjetas/Contenedores:** (Descripción de la redondez de las esquinas, color de fondo, profundidad de la sombra).
* **Entradas/Formularios:** (Estilo de trazo, fondo).

## 5. Principios de Diseño
(Descripción de la estrategia de espacios en blanco, márgenes y alineación de la cuadrícula).
```

## Ejemplo de Uso

Para usar esta habilidad en el proyecto Furniture Collection:

1. **Recuperar información del proyecto:**
   ```
   Usa el Servidor MCP de Stitch para obtener el proyecto Furniture Collection
   ```

2. **Obtener detalles de la pantalla Home:**
   ```
   Recupera el código de la pantalla Home, la imagen y la información del objeto de la pantalla
   ```

3. **Referenciar mejores prácticas:**
   ```
   Revisa la Guía de Prompting Efectivo de Stitch en:
   https://stitch.withgoogle.com/docs/learn/prompting/
   ```

4. **Analizar y sintetizar:**
   - Extrae todos los tokens de diseño relevantes de la pantalla.
   - Traduce los valores técnicos a lenguaje descriptiva.
   - Organiza la información de acuerdo con la estructura de DESIGN.md.

5. **Generar el archivo:**
   - Crea `DESIGN.md` en el directorio del proyecto.
   - Sigue exactamente el formato prescrito.
   - Asegúrate de que todos los códigos de color sean precisos.
   - Usa un lenguaje evocador y amigable para el diseñador.

## Mejores Prácticas

- **Sé Descriptivo:** Evita términos genéricos como "azul" o "redondeado." Usa "Azul Cerúleo Profundo Oceánico (#0077B6)" o "Bordes suavemente curvados".
- **Sé Funcional:** Explica siempre para qué se usa cada elemento de diseño.
- **Sé Consistente:** Usa la misma terminología en todo el documento.
- **Sé Visual:** Ayuda a los lectores a visualizar el diseño a través de tus descripciones.
- **Sé Preciso:** Incluye valores exactos (códigos hex, valores en píxeles) entre paréntesis después de las descripciones en lenguaje natural.

## Consejos para el Éxito

1. **Comienza con la imagen general:** Entiende la estética global antes de sumergirte en los detalles.
2. **Busca patrones:** Identifica patrones consistentes de espaciado, tamaño y estilo.
3. **Piensa semánticamente:** Nombra los colores por su propósito, no solo por su apariencia.
4. **Considera la jerarquía:** Documenta cómo se comunican el peso visual y la importancia.
5. **Referencia la guía:** Usa el lenguaje y los patrones de la Guía de Prompting Efectivo de Stitch.

## Errores Comunes a Evitar

- ❌ Usar jerga técnica sin traducción (ej. "rounded-xl" en lugar de "esquinas generosamente redondeadas").
- ❌ Omitir códigos de color o usar solo nombres descriptivos.
- ❌ Olvidar explicar los roles funcionales de los elementos de diseño.
- ❌ Ser demasiado vago en las descripciones de la atmósfera.
- ❌ Ignorar detalles de diseño sutiles como sombras o patrones de espaciado.
---
## Cuándo usar
Esta habilidad es aplicable para ejecutar el flujo de trabajo o las acciones descritas en la descripción general.
