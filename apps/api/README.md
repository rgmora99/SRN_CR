# apps/api

Backend del asistente docente.

## Responsabilidades
- Exponer endpoints de generación de planeamiento.
- Validar entradas y salidas.
- Orquestar proveedor de IA.
- Persistir resultados y auditoría.

## Endpoints objetivo (MVP)
- `POST /planning/generate`
- `GET /planning/:id`
- `GET /health`
