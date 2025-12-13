# Notas sobre Clean Code

La idea central de *Clean Code* es que el software es un acto de comunicación. No escribimos solo para que la computadora lo entienda, sino para que otras personas lo mantengan.

> "Leave the campsite cleaner than you found it".

## Principios que aplico a diario

- Nombres que cuenten una historia
- Funciones con una sola responsabilidad
- Tests que expliquen el comportamiento
- Comentarios solo cuando añaden contexto

| Mal | Mejor |
| --- | --- |
| `const data = fetch()` | `const projects = fetchProjects()` |
| `handleClick2()` | `handleSecondaryAction()` |

Pequeñas mejoras incrementales, todos los días, construyen bases sólidas.
