# Asistente de Planeamiento Docente

Estructura base para un sistema que genera propuestas de planeamiento didáctico a partir de:
- Materia
- Nivel
- Tema
- Tiempo de clase
- Tipo de evaluación

## Objetivo del MVP
Proveer una primera versión funcional con:
1. Formulario de entrada docente.
2. Motor de generación de planeamiento con IA.
3. Salida estructurada con actividades, recursos, evaluación y adaptaciones.
4. Exportación básica (JSON/PDF en fases posteriores).

## Estructura del proyecto

```text
apps/
  web/                 # Frontend (Next.js)
  api/                 # Backend (Node + Express)
packages/
  shared/              # Tipos, constantes y prompts compartidos
infrastructure/
  supabase/            # Configuración inicial de DB/Auth
  migrations/          # Migraciones SQL
docs/                  # Documentación funcional y técnica
```

## Próximos pasos sugeridos
1. Inicializar `apps/web` con Next.js + Tailwind.
2. Inicializar `apps/api` con Express + Zod.
3. Conectar Supabase para autenticación y persistencia.
4. Implementar endpoint `POST /planning/generate`.
5. Integrar proveedor de IA con salida en JSON validado.
