---
description: Habilidad para crear nuevas habilidades en el workspace, siguiendo las mejores prácticas y en idioma español.
name: creador-de-habilidades
---

# Generador de Habilidades de Antigravity

Esta habilidad permite al asistente crear nuevas capacidades ("skills") dentro del workspace. Una habilidad es un conjunto de instrucciones, scripts y recursos que extienden las capacidades del asistente para tareas especializadas.

## Estructura de una Habilidad

Cada habilidad debe residir en su propia carpeta dentro de `.agents/skills/` y tener la siguiente estructura mínima:

- `SKILL.md` (Obligatorio): Contiene el frontmatter YAML y las instrucciones.
- `scripts/` (Opcional): Scripts que la habilidad puede ejecutar.
- `examples/` (Opcional): Ejemplos de uso para guiar al asistente.
- `resources/` (Opcional): Archivos de datos, plantillas o activos estáticos.

## Instrucciones para el Asistente

Cuando se te pida crear una nueva habilidad:

1.  **Define el Propósito**: Asegúrate de que la habilidad tenga una única responsabilidad clara.
2.  **Crea la Carpeta**: Crea una carpeta descriptiva en `.agents/skills/<nombre-habiliad>`.
3.  **Escribe el `SKILL.md`**:
    - El archivo debe comenzar con un bloque frontmatter YAML:
      ```yaml
      ---
      description: <Descripción clara y concisa en español>
      name: <nombre-de-la-habilidad>
      ---
      ```
    - Incluye secciones detalladas sobre cómo usar la habilidad, qué herramientas emplear y qué reglas seguir.
4.  **Agrega Recursos**: Si la habilidad requiere una estructura compleja, añade plantillas en `resources/` o scripts en `scripts/`.
5.  **Usa el Idioma Español**: Todas las instrucciones y descripciones de las habilidades creadas con esta herramienta deben estar en español, a menos que se solicite lo contrario.

## Mejores Prácticas

- **Foco Único**: Una habilidad, una tarea.
- **Descripciones Claras**: El asistente usa la `description` para "descubrir" la habilidad. Hazla específica.
- **Documentación de Scripts**: Si incluyes scripts, documenta cómo obtener ayuda (ej. `script.py --help`) en lugar de obligar al asistente a leer todo el código.
- **Árboles de Decisión**: Para flujos complejos, define cómo decidir entre diferentes enfoques dentro de `SKILL.md`.

---

> [!TIP]
> Puedes usar la plantilla que se encuentra en `resources/template_skill.md` de esta misma habilidad para empezar.
