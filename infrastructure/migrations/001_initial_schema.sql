-- Esquema base para MVP

create table if not exists planning_requests (
  id uuid primary key default gen_random_uuid(),
  teacher_id text not null,
  materia text not null,
  nivel text not null,
  tema text not null,
  tiempo_minutos integer not null check (tiempo_minutos > 0),
  tipo_evaluacion text not null,
  contexto text,
  created_at timestamptz not null default now()
);

create table if not exists planning_results (
  id uuid primary key default gen_random_uuid(),
  request_id uuid not null references planning_requests(id) on delete cascade,
  objetivo_aprendizaje text not null,
  actividades jsonb not null,
  evaluacion text not null,
  adaptaciones jsonb not null,
  recursos_generales jsonb not null,
  created_at timestamptz not null default now()
);
