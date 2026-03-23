# Arquitectura MVP

## Componentes

1. **Web App**
   - Captura datos de planeamiento.
   - Envía solicitud al backend.
   - Muestra propuesta editable.

2. **API**
   - Valida datos de entrada.
   - Construye prompt con plantilla.
   - Llama al proveedor IA.
   - Devuelve JSON estructurado.

3. **Persistencia**
   - Guarda solicitudes y resultados.
   - Permite historial por docente.

## Flujo principal

1. Docente completa formulario.
2. Frontend llama `POST /planning/generate`.
3. Backend valida y genera respuesta con IA.
4. Frontend renderiza planeamiento.
5. Docente ajusta y guarda.
