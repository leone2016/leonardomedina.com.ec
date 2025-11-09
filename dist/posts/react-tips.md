# Consejos rápidos de React

Cuando desarrollo con React me gusta tener a mano un pequeño checklist que evita dolores de cabeza más adelante.

1. **Componentes pequeños y legibles.** Divide la interfaz en fragmentos con responsabilidades claras.
2. **Custom hooks.** Si repites lógica, extrae un hook. Facilita las pruebas y simplifica la lectura.
3. **Suspense & lazy.** Aprovecha el lazy loading para optimizar la carga percibida.
4. **Error boundaries.** No olvides envolver secciones críticas para capturar fallos inesperados.

```jsx
function useIsMounted() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}
```

Pequeños detalles como estos hacen que las aplicaciones se sientan más robustas y fáciles de mantener.
