# Contrato API (borrador)

## POST /planning/generate

### Request
```json
{
  "materia": "Ciencias",
  "nivel": "7mo",
  "tema": "Ciclo del agua",
  "tiempoMinutos": 80,
  "tipoEvaluacion": "formativa",
  "contexto": "Grupo con conectividad limitada"
}
```

### Response
```json
{
  "objetivoAprendizaje": "...",
  "actividades": [
    {
      "fase": "inicio",
      "duracionMinutos": 10,
      "descripcion": "...",
      "recursos": ["..."]
    }
  ],
  "evaluacion": "...",
  "adaptaciones": ["..."],
  "recursosGenerales": ["..."]
}
```
