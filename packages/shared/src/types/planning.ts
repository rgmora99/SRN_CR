export type EvaluationType =
  | "diagnostica"
  | "formativa"
  | "sumativa"
  | "rubrica"
  | "lista_cotejo";

export interface PlanningInput {
  materia: string;
  nivel: string;
  tema: string;
  tiempoMinutos: number;
  tipoEvaluacion: EvaluationType;
  contexto?: string;
}

export interface ActivityBlock {
  fase: "inicio" | "desarrollo" | "cierre";
  duracionMinutos: number;
  descripcion: string;
  recursos?: string[];
}

export interface PlanningOutput {
  objetivoAprendizaje: string;
  actividades: ActivityBlock[];
  evaluacion: string;
  adaptaciones: string[];
  recursosGenerales: string[];
}
