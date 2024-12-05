export interface UnidadSanitaria {
  id: string;
  nombre: string;
  actorId?: string;
}

export interface Actor {
  id: string;
  nombre: string;
  apellido: string;
  dni: string;
  unidadesSanitarias: string[];
}

export interface Detenido {
  id: string;
  nombre: string;
  unidadSanitariaId: string;
  medicamentos: Medicamento[];
}

export interface Medicamento {
  id: string;
  nombre: string;
  cantidadDiaria: number;
  fechaRecetado: string;
}

export interface RegistroMedicacion {
  id: string;
  detenidoId: string;
  medicamentoId: string;
  fecha: string;
  cantidadEntregada: number;
}

export interface StockMedicamento {
  id: string;
  medicamentoId: string;
  unidadSanitariaId: string;
  cantidad: number;
  fechaIngreso: string;
}
